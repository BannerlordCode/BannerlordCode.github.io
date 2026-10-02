---
title: "MissionShipParametersModel"
description: "MissionShipParametersModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<MissionShipParametersModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs."
---
# MissionShipParametersModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs`

## Overview

MissionShipParametersModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MissionShipParametersModel>; the inheritance chain is MissionShipParametersModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionShipParametersModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain MissionShipParametersModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateMainDeckCrewSize` | `public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent formationUnit);` | method |
| `CalculateWindBonus` | `public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude);` | method |
| `CalculateOarForceMultiplier` | `public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace AutoBlockModel](../AutoBlockModel)
