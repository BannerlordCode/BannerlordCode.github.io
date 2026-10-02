---
title: "InterruptingBehaviorGroup"
description: "InterruptingBehaviorGroup: a public class in SandBox, inheriting AgentBehaviorGroup; 5 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs."
---
# InterruptingBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class InterruptingBehaviorGroup : AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs`

## Overview

InterruptingBehaviorGroup lives in the SandBox module, source file SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs. It is a public class, implementing/inheriting AgentBehaviorGroup; the inheritance chain is InterruptingBehaviorGroup → AgentBehaviorGroup. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InterruptingBehaviorGroup is a top-level type in SandBox, namespace differing from (SandBox.Missions.AgentBehaviors) the module directory; inheritance chain InterruptingBehaviorGroup → AgentBehaviorGroup. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InterruptingBehaviorGroup` | `public InterruptingBehaviorGroup(AgentNavigator navigator, Mission mission) : base(navigator, mission)` | constructor |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `GetScore` | `public override float GetScore(bool isSimulation)` | method |
| `ForceThink` | `public override void ForceThink(float inSeconds)` | method |
| `ConversationTick` | `public override void ConversationTick()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentBehaviorGroup](../AgentBehaviorGroup)
- [same namespace AgentBehavior](../AgentBehavior)
- [same namespace AgentBehaviorGroup](../AgentBehaviorGroup)
- [same namespace AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [same namespace BehaviorSets](../BehaviorSets)
