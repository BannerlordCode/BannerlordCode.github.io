---
title: "PatrolAgentBehavior"
description: "PatrolAgentBehavior: a public class in SandBox, inheriting AgentBehavior; 7 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox/Missions/AgentBehaviors/PatrolAgentBehavior.cs."
---
# PatrolAgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class PatrolAgentBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/PatrolAgentBehavior.cs`

## Overview

PatrolAgentBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/PatrolAgentBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is PatrolAgentBehavior → AgentBehavior. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PatrolAgentBehavior is a top-level type in SandBox, namespace differing from (SandBox.Missions.AgentBehaviors) the module directory; inheritance chain PatrolAgentBehavior → AgentBehavior. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/PatrolAgentBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PatrolAgentBehavior` | `public PatrolAgentBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `SetDynamicPatrolArea` | `public void SetDynamicPatrolArea(GameEntity parentPatrolPoint)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |
| `GetDebugInfo` | `public override string GetDebugInfo()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentBehavior](../AgentBehavior)
- [same namespace AgentBehavior](../AgentBehavior)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [same namespace BehaviorSets](../BehaviorSets)
