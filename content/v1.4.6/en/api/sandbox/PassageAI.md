---
title: "PassageAI"
description: "PassageAI: a public class in SandBox, inheriting UsableMachineAIBase; 3 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/AI/PassageAI.cs."
---
# PassageAI

**Namespace:** `SandBox.AI`
**Module:** `SandBox`
**Type:** `public class PassageAI : UsableMachineAIBase`
**File:** `SandBox/AI/PassageAI.cs`

## Overview

PassageAI lives in the SandBox module, source file SandBox/AI/PassageAI.cs. It is a public class, implementing/inheriting UsableMachineAIBase; the inheritance chain is PassageAI → UsableMachineAIBase. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PassageAI is a top-level type in SandBox, namespace differing from (SandBox.AI) the module directory; inheritance chain PassageAI → UsableMachineAIBase. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. UsableMachineAIBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/AI/PassageAI.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PassageAI` | `public PassageAI(UsableMachine usableMachine) : base(usableMachine)` | constructor |
| `GetScriptedFrameFlags` | `protected override Agent.AIScriptedFrameFlags GetScriptedFrameFlags(Agent agent)` | method |
| `OnTick` | `protected override void OnTick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentBehaviorManager](../AgentBehaviorManager)
- [same namespace UsablePlaceAI](../UsablePlaceAI)
