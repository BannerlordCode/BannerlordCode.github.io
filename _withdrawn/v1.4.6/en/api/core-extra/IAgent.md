---
title: "IAgent"
description: "IAgent: a public interface in TaleWorlds.Core; 10 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/IAgent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IAgent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IAgent`
**File:** `TaleWorlds.Core/IAgent.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

IAgent lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IAgent.cs. It is a public interface; the inheritance chain is IAgent. It exposes 10 public/protected members: 5 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAgent lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain IAgent. The surface is method-led (methods 5/10, properties 5/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IAgent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Character` | `BasicCharacterObject Character` | property |
| `IsEnemyOf` | `bool IsEnemyOf(IAgent agent);` | method |
| `IsFriendOf` | `bool IsFriendOf(IAgent agent);` | method |
| `State` | `AgentState State` | property |
| `Team` | `IMissionTeam Team` | property |
| `Origin` | `IAgentOriginBase Origin` | property |
| `Age` | `float Age` | property |
| `IsActive` | `bool IsActive();` | method |
| `SetAsConversationAgent` | `void SetAsConversationAgent(bool set);` | method |
| `OnConversationStarted` | `void OnConversationStarted();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
