---
title: "CombatSimulationModel"
description: "CombatSimulationModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<CombatSimulationModel>; 13 exposed members (13 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CombatSimulationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

CombatSimulationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CombatSimulationModel>; the inheritance chain is CombatSimulationModel → MBGameModel → GameModel. It exposes 13 public/protected members: 13 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CombatSimulationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain CombatSimulationModel → MBGameModel → GameModel. The surface is method-led (methods 13/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SimulateHit` | `public abstract ExplainedNumber SimulateHit(CharacterObject strikerTroop, CharacterObject struckTroop, PartyBase strikerParty, PartyBase struckParty, float strikerAdvantage, MapEvent battle, float strikerSideMorale, float struckSideMorale);` | method |
| `SimulateHit` | `public abstract ExplainedNumber SimulateHit(Ship strikerShip, Ship struckShip, PartyBase strikerParty, PartyBase struckParty, SiegeEngineType siegeEngine, float strikerAdvantage, MapEvent battle, out int troopCasualties);` | method |
| `int>GetSimulationTicksForBattleRound` | `public abstract ValueTuple<int, int>GetSimulationTicksForBattleRound(MapEvent mapEvent);` | method |
| `GetNumberOfEquipmentsBuilt` | `public abstract int GetNumberOfEquipmentsBuilt(Settlement settlement);` | method |
| `GetMaximumSiegeEquipmentProgress` | `public abstract float GetMaximumSiegeEquipmentProgress(Settlement settlement);` | method |
| `GetSettlementAdvantage` | `public abstract float GetSettlementAdvantage(Settlement settlement);` | method |
| `GetBattleAdvantage` | `public abstract void GetBattleAdvantage(MapEvent mapEvent, out ExplainedNumber defenderAdvantage, out ExplainedNumber attackerAdvantage);` | method |
| `GetShipSiegeEngineHitChance` | `public abstract float GetShipSiegeEngineHitChance(Ship ship, SiegeEngineType siegeEngineType, BattleSideEnum battleSide);` | method |
| `GetPursuitRoundCount` | `public abstract int GetPursuitRoundCount(MapEvent mapEvent);` | method |
| `GetBluntDamageChance` | `public abstract float GetBluntDamageChance(CharacterObject strikerTroop, CharacterObject strikedTroop, PartyBase strikerParty, PartyBase strikedParty, MapEvent battle);` | method |
| `GetSimulationTickInterval` | `public abstract CampaignTime GetSimulationTickInterval(MapEvent mapEvent);` | method |
| `MapEventParty>>GetSimulationShips` | `public abstract MBList<ValueTuple<Ship, MapEventParty>>GetSimulationShips(MapEvent mapEvent, MBList<MapEventParty>battleParties);` | method |
| `GetParticipatingTroopCount` | `public abstract int GetParticipatingTroopCount(MapEventSide side);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
