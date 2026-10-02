---
title: "DailyBehaviorGroup"
description: "DailyBehaviorGroup: a public class in SandBox, inheriting AgentBehaviorGroup; 8 exposed members (7 methods, 0 properties, 0 fields). Source: SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs."
---
# DailyBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class DailyBehaviorGroup : AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs`

## Overview

DailyBehaviorGroup lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs. It is a public class, implementing/inheriting AgentBehaviorGroup; the inheritance chain is DailyBehaviorGroup → AgentBehaviorGroup. It exposes 8 public/protected members: 7 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DailyBehaviorGroup is a top-level type in SandBox, namespace differing from (SandBox.Missions.AgentBehaviors) the module directory; inheritance chain DailyBehaviorGroup → AgentBehaviorGroup. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DailyBehaviorGroup` | `public DailyBehaviorGroup(AgentNavigator navigator, Mission mission) : base(navigator, mission)` | constructor |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `ConversationTick` | `public override void ConversationTick()` | method |
| `GetScore` | `public override float GetScore(bool isSimulation)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent agent)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `ForceThink` | `public override void ForceThink(float inSeconds)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentBehaviorGroup](../AgentBehaviorGroup)
- [same namespace AgentBehavior](../AgentBehavior)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [same namespace BehaviorSets](../BehaviorSets)
