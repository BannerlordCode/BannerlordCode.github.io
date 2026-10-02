---
title: "ChangeLocationBehavior"
description: "ChangeLocationBehavior: a public class in SandBox, inheriting AgentBehavior; 6 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox/Missions/AgentBehaviors/ChangeLocationBehavior.cs."
---
# ChangeLocationBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class ChangeLocationBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/ChangeLocationBehavior.cs`

## Overview

ChangeLocationBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/ChangeLocationBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is ChangeLocationBehavior → AgentBehavior. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeLocationBehavior is a top-level type in SandBox, namespace differing from (SandBox.Missions.AgentBehaviors) the module directory; inheritance chain ChangeLocationBehavior → AgentBehavior. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/ChangeLocationBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChangeLocationBehavior` | `public ChangeLocationBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `GetDebugInfo` | `public override string GetDebugInfo()` | method |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentBehavior](../AgentBehavior)
- [same namespace AgentBehavior](../AgentBehavior)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [same namespace BehaviorSets](../BehaviorSets)
