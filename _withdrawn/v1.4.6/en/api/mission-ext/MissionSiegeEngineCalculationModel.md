---
title: "MissionSiegeEngineCalculationModel"
description: "MissionSiegeEngineCalculationModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<MissionSiegeEngineCalculationModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/MissionSiegeEngineCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSiegeEngineCalculationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionSiegeEngineCalculationModel : MBGameModel<MissionSiegeEngineCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionSiegeEngineCalculationModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionSiegeEngineCalculationModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/MissionSiegeEngineCalculationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MissionSiegeEngineCalculationModel>; the inheritance chain is MissionSiegeEngineCalculationModel → MBGameModel → GameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeEngineCalculationModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain MissionSiegeEngineCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/MissionSiegeEngineCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateReloadSpeed` | `public abstract float CalculateReloadSpeed(Agent userAgent, float baseSpeed);` | method |
| `CalculateShipSiegeWeaponAmmoCount` | `public abstract int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon);` | method |
| `CalculateDamage` | `public abstract int CalculateDamage(Agent attackerAgent, float baseDamage);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
