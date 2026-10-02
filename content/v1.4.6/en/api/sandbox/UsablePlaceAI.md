---
title: "UsablePlaceAI"
description: "UsablePlaceAI: a public class in SandBox, inheriting UsableMachineAIBase; 2 exposed members (1 methods, 0 properties, 0 fields). Source: SandBox/AI/UsablePlaceAI.cs."
---
# UsablePlaceAI

**Namespace:** `SandBox.AI`
**Module:** `SandBox`
**Type:** `public class UsablePlaceAI : UsableMachineAIBase`
**File:** `SandBox/AI/UsablePlaceAI.cs`

## Overview

UsablePlaceAI lives in the SandBox module, source file SandBox/AI/UsablePlaceAI.cs. It is a public class, implementing/inheriting UsableMachineAIBase; the inheritance chain is UsablePlaceAI → UsableMachineAIBase. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UsablePlaceAI is a top-level type in SandBox, namespace differing from (SandBox.AI) the module directory; inheritance chain UsablePlaceAI → UsableMachineAIBase. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. UsableMachineAIBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/AI/UsablePlaceAI.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UsablePlaceAI` | `public UsablePlaceAI(UsableMachine usableMachine) : base(usableMachine)` | constructor |
| `GetScriptedFrameFlags` | `protected override Agent.AIScriptedFrameFlags GetScriptedFrameFlags(Agent agent)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentBehaviorManager](../AgentBehaviorManager)
- [same namespace PassageAI](../PassageAI)
