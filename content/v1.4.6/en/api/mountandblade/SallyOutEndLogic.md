---
title: "SallyOutEndLogic"
description: "SallyOutEndLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SallyOutEndLogic.cs."
---
# SallyOutEndLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SallyOutEndLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutEndLogic.cs`

## Overview

SallyOutEndLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SallyOutEndLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is SallyOutEndLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SallyOutEndLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SallyOutEndLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SallyOutEndLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSallyOutOver` | `public bool IsSallyOutOver` | property |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
