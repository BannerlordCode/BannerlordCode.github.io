---
title: "SiegeMissionPreparationHandler"
description: "SiegeMissionPreparationHandler: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs."
---
# SiegeMissionPreparationHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeMissionPreparationHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs`

## Overview

SiegeMissionPreparationHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is SiegeMissionPreparationHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeMissionPreparationHandler is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SiegeMissionPreparationHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeMissionPreparationHandler` | `public SiegeMissionPreparationHandler(bool isSallyOut, bool isReliefForceAttack, float[]wallHitPointPercentages, bool hasAnySiegeTower)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
