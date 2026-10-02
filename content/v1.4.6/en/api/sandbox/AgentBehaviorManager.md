---
title: "AgentBehaviorManager"
description: "AgentBehaviorManager: a public class in SandBox, inheriting IAgentBehaviorManager; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/AI/AgentBehaviorManager.cs."
---
# AgentBehaviorManager

**Namespace:** `SandBox.AI`
**Module:** `SandBox`
**Type:** `public class AgentBehaviorManager : IAgentBehaviorManager`
**File:** `SandBox/AI/AgentBehaviorManager.cs`

## Overview

AgentBehaviorManager lives in the SandBox module, source file SandBox/AI/AgentBehaviorManager.cs. It is a public class, implementing/inheriting IAgentBehaviorManager; the inheritance chain is AgentBehaviorManager → IAgentBehaviorManager. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentBehaviorManager is a top-level type in SandBox, namespace differing from (SandBox.AI) the module directory; inheritance chain AgentBehaviorManager → IAgentBehaviorManager. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. IAgentBehaviorManager on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/AI/AgentBehaviorManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddQuestCharacterBehaviors` | `public void AddQuestCharacterBehaviors(IAgent agent)` | method |
| `AddFirstCompanionBehavior` | `public void AddFirstCompanionBehavior(IAgent agent)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PassageAI](../PassageAI)
- [same namespace UsablePlaceAI](../UsablePlaceAI)
