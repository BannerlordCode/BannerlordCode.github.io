---
title: "DefaultSiegeEngineCalculationModel"
description: "DefaultSiegeEngineCalculationModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MissionSiegeEngineCalculationModel; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSiegeEngineCalculationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultSiegeEngineCalculationModel : MissionSiegeEngineCalculationModel`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DefaultSiegeEngineCalculationModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs. It is a public class, implementing/inheriting MissionSiegeEngineCalculationModel; the inheritance chain is DefaultSiegeEngineCalculationModel → MissionSiegeEngineCalculationModel → MBGameModel → GameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSiegeEngineCalculationModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain DefaultSiegeEngineCalculationModel → MissionSiegeEngineCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateReloadSpeed` | `public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)` | method |
| `CalculateShipSiegeWeaponAmmoCount` | `public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)` | method |
| `CalculateDamage` | `public override int CalculateDamage(Agent attackerAgent, float baseDamage)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionSiegeEngineCalculationModel](../MissionSiegeEngineCalculationModel/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
