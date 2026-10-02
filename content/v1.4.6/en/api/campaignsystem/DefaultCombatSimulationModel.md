---
title: "DefaultCombatSimulationModel"
description: "DefaultCombatSimulationModel: a public class in TaleWorlds.CampaignSystem, inheriting CombatSimulationModel; 13 exposed members (13 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs."
---
# DefaultCombatSimulationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCombatSimulationModel : CombatSimulationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs`

## Overview

DefaultCombatSimulationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs. It is a public class, implementing/inheriting CombatSimulationModel; the inheritance chain is DefaultCombatSimulationModel → CombatSimulationModel → MBGameModel. It exposes 13 public/protected members: 13 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCombatSimulationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultCombatSimulationModel → CombatSimulationModel → MBGameModel. The surface is method-led (methods 13/13, properties 0/13), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCombatSimulationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SimulateHit` | `public override ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale)` | method |
| `SimulateHit` | `public override ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties)` | method |
| `GetMaximumSiegeEquipmentProgress` | `public override float GetMaximumSiegeEquipmentProgress(Settlement settlement)` | method |
| `GetNumberOfEquipmentsBuilt` | `public override int GetNumberOfEquipmentsBuilt(Settlement settlement)` | method |
| `GetSettlementAdvantage` | `public override float GetSettlementAdvantage(Settlement settlement)` | method |
| `int>GetSimulationTicksForBattleRound` | `public override ValueTuple<int, int>GetSimulationTicksForBattleRound(MapEvent mapEvent)` | method |
| `GetBattleAdvantage` | `public override void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage)` | method |
| `GetShipSiegeEngineHitChance` | `public override float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide)` | method |
| `GetPursuitRoundCount` | `public override int GetPursuitRoundCount(MapEvent mapEvent)` | method |
| `GetBluntDamageChance` | `public override float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle)` | method |
| `GetSimulationTickInterval` | `public override CampaignTime GetSimulationTickInterval(MapEvent mapEvent)` | method |
| `MapEventParty>>GetSimulationShips` | `public override MBList<ValueTuple<Ship, MapEventParty>>GetSimulationShips(MapEvent mapEvent, MBList<MapEventParty>battleParties)` | method |
| `GetParticipatingTroopCount` | `public override int GetParticipatingTroopCount(MapEventSide side)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CombatSimulationModel](../CombatSimulationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
