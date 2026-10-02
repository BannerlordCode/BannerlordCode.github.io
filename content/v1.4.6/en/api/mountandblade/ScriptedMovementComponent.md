---
title: "ScriptedMovementComponent"
description: "ScriptedMovementComponent: a public class in TaleWorlds.MountAndBlade, inheriting AgentComponent; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs."
---
# ScriptedMovementComponent

**Namespace:** `TaleWorlds.MountAndBlade.AI.AgentComponents`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ScriptedMovementComponent : AgentComponent`
**File:** `TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs`

## Overview

ScriptedMovementComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs. It is a public class, implementing/inheriting AgentComponent; the inheritance chain is ScriptedMovementComponent → AgentComponent. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScriptedMovementComponent is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.AI.AgentComponents) the module directory; inheritance chain ScriptedMovementComponent → AgentComponent. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScriptedMovementComponent` | `public ScriptedMovementComponent(Agent agent, bool isCharacterToTalkTo = false, float dialogueProximityOffset = 0f) : base(agent)` | constructor |
| `SetTargetAgent` | `public void SetTargetAgent(Agent targetAgent)` | method |
| `OnTick` | `public override void OnTick(float dt)` | method |
| `ShouldConversationStartWithAgent` | `public bool ShouldConversationStartWithAgent()` | method |
| `Reset` | `public void Reset()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AgentComponent](../AgentComponent)
