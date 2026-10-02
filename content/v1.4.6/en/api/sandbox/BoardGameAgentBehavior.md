---
title: "BoardGameAgentBehavior"
description: "BoardGameAgentBehavior: a public class in SandBox, inheriting AgentBehavior; 9 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs."
---
# BoardGameAgentBehavior

**Namespace:** `SandBox.Source.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class BoardGameAgentBehavior : AgentBehavior`
**File:** `SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs`

## Overview

BoardGameAgentBehavior lives in the SandBox module, source file SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs. It is a public class, implementing/inheriting AgentBehavior; the inheritance chain is BoardGameAgentBehavior → AgentBehavior. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameAgentBehavior is a top-level type in SandBox, namespace differing from (SandBox.Source.Missions.AgentBehaviors) the module directory; inheritance chain BoardGameAgentBehavior → AgentBehavior. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameAgentBehavior` | `public BoardGameAgentBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | constructor |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | method |
| `ConversationTick` | `public override void ConversationTick()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `GetDebugInfo` | `public override string GetDebugInfo()` | method |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | method |
| `AddTargetChair` | `public static void AddTargetChair(Agent ownerAgent, Chair chair)` | method |
| `RemoveBoardGameBehaviorOfAgent` | `public static void RemoveBoardGameBehaviorOfAgent(Agent ownerAgent)` | method |
| `IsAgentMovingToChair` | `public static bool IsAgentMovingToChair(Agent ownerAgent)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentBehavior](../AgentBehavior)
