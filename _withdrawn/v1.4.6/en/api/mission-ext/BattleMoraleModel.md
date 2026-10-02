---
title: "BattleMoraleModel"
description: "BattleMoraleModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<BattleMoraleModel>; 19 exposed members (10 methods, 0 properties, 9 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleMoraleModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleMoraleModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BattleMoraleModel>; the inheritance chain is BattleMoraleModel → MBGameModel → GameModel. It exposes 19 public/protected members: 10 methods, 9 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleMoraleModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain BattleMoraleModel → MBGameModel → GameModel. The surface is method-led (methods 10/19, properties 0/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `float>CalculateMaxMoraleChangeDueToAgentIncapacitated` | `public abstract ValueTuple<float, float>CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow);` | method |
| `float>CalculateMaxMoraleChangeDueToAgentPanicked` | `public abstract ValueTuple<float, float>CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent);` | method |
| `CalculateMoraleChangeToCharacter` | `public abstract float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange);` | method |
| `GetEffectiveInitialMorale` | `public abstract float GetEffectiveInitialMorale(Agent agent, float baseMorale);` | method |
| `CanPanicDueToMorale` | `public abstract bool CanPanicDueToMorale(Agent agent);` | method |
| `CalculateCasualtiesFactor` | `public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide);` | method |
| `GetAverageMorale` | `public abstract float GetAverageMorale(Formation formation);` | method |
| `CalculateMoraleChangeOnShipSunk` | `public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin);` | method |
| `CalculateMoraleOnRamming` | `public abstract float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip);` | method |
| `CalculateMoraleOnShipsConnected` | `public abstract float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip);` | method |
| `BaseMoraleGainOnKill` | `public const float BaseMoraleGainOnKill` | field |
| `BaseMoraleLossOnKill` | `public const float BaseMoraleLossOnKill` | field |
| `BaseMoraleGainOnPanic` | `public const float BaseMoraleGainOnPanic` | field |
| `BaseMoraleLossOnPanic` | `public const float BaseMoraleLossOnPanic` | field |
| `MeleeWeaponMoraleMultiplier` | `public const float MeleeWeaponMoraleMultiplier` | field |
| `RangedWeaponMoraleMultiplier` | `public const float RangedWeaponMoraleMultiplier` | field |
| `SiegeWeaponMoraleMultiplier` | `public const float SiegeWeaponMoraleMultiplier` | field |
| `BurningSiegeWeaponMoraleBonus` | `public const float BurningSiegeWeaponMoraleBonus` | field |
| `CasualtyFactorRate` | `public const float CasualtyFactorRate` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
