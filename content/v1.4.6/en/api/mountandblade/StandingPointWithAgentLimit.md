---
title: "StandingPointWithAgentLimit"
description: "StandingPointWithAgentLimit: a public class in TaleWorlds.MountAndBlade, inheriting StandingPoint; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs."
---
# StandingPointWithAgentLimit

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StandingPointWithAgentLimit : StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs`

## Overview

StandingPointWithAgentLimit lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is StandingPointWithAgentLimit → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StandingPointWithAgentLimit is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain StandingPointWithAgentLimit → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddValidAgent` | `public void AddValidAgent(Agent agent)` | method |
| `ClearValidAgents` | `public void ClearValidAgents()` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface StandingPoint](../StandingPoint)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
