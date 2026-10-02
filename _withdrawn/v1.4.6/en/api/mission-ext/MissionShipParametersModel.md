---
title: "MissionShipParametersModel"
description: "MissionShipParametersModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<MissionShipParametersModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionShipParametersModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionShipParametersModel : MBGameModel<MissionShipParametersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionShipParametersModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MissionShipParametersModel>; the inheritance chain is MissionShipParametersModel → MBGameModel → GameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionShipParametersModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain MissionShipParametersModel → MBGameModel → GameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/MissionShipParametersModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateMainDeckCrewSize` | `public abstract int CalculateMainDeckCrewSize(IShipOrigin shipOrigin, Agent formationUnit);` | method |
| `CalculateWindBonus` | `public abstract float CalculateWindBonus(IShipOrigin shipOrigin, Agent captain, float baseSailForceMagnitude);` | method |
| `CalculateOarForceMultiplier` | `public abstract float CalculateOarForceMultiplier(Agent pilotAgent, float baseOarForce);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
