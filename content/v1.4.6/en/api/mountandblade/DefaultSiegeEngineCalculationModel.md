---
title: "DefaultSiegeEngineCalculationModel"
description: "DefaultSiegeEngineCalculationModel: a public class in TaleWorlds.MountAndBlade, inheriting MissionSiegeEngineCalculationModel; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs."
---
# DefaultSiegeEngineCalculationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultSiegeEngineCalculationModel : MissionSiegeEngineCalculationModel`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs`

## Overview

DefaultSiegeEngineCalculationModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs. It is a public class, implementing/inheriting MissionSiegeEngineCalculationModel; the inheritance chain is DefaultSiegeEngineCalculationModel → MissionSiegeEngineCalculationModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSiegeEngineCalculationModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain DefaultSiegeEngineCalculationModel → MissionSiegeEngineCalculationModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateReloadSpeed` | `public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)` | method |
| `CalculateShipSiegeWeaponAmmoCount` | `public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)` | method |
| `CalculateDamage` | `public override int CalculateDamage(Agent attackerAgent, float baseDamage)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionSiegeEngineCalculationModel](../MissionSiegeEngineCalculationModel)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace AutoBlockModel](../AutoBlockModel)
