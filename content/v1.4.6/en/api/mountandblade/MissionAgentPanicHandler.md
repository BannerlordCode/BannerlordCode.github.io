---
title: "MissionAgentPanicHandler"
description: "MissionAgentPanicHandler: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs."
---
# MissionAgentPanicHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionAgentPanicHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs`

## Overview

MissionAgentPanicHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionAgentPanicHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentPanicHandler is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionAgentPanicHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentPanicHandler` | `public MissionAgentPanicHandler()` | constructor |
| `OnAgentPanicked` | `public override void OnAgentPanicked(Agent agent)` | method |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
