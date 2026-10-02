---
title: "FleeBehavior"
description: "FleeBehavior: a public class in SandBox, inheriting AgentBehavior; 10 exposed members (4 methods, 0 properties, 5 fields). Source: SandBox/Missions/AgentBehaviors/FleeBehavior.cs."
---
# FleeBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class FleeBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/FleeBehavior.cs`

## Overview

FleeBehavior lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/FleeBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is FleeBehavior → AgentBehavior. It exposes 10 public/protected members: 4 methods, 5 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FleeBehavior is a top-level type in SandBox, namespace differing from (SandBox.Missions.AgentBehaviors) the module directory; inheritance chain FleeBehavior → AgentBehavior. The surface is method-led (methods 4/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/FleeBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FleeBehavior` | `public FleeBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `GetDebugInfo` | `public override string GetDebugInfo()` | method |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |
| `ScoreThreshold` | `public const float ScoreThreshold` | field |
| `DangerDistance` | `public const float DangerDistance` | field |
| `ImmediateDangerDistance` | `public const float ImmediateDangerDistance` | field |
| `DangerDistanceSquared` | `public const float DangerDistanceSquared` | field |
| `ImmediateDangerDistanceSquared` | `public const float ImmediateDangerDistanceSquared` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentBehavior](../AgentBehavior)
- [same namespace AgentBehavior](../AgentBehavior)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [same namespace BehaviorSets](../BehaviorSets)
