---
title: "IAgent"
description: "IAgent: a public interface in TaleWorlds.Core; 10 exposed members (5 methods, 5 properties, 0 fields). Source: TaleWorlds.Core/IAgent.cs."
---
# IAgent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IAgent`
**File:** `TaleWorlds.Core/IAgent.cs`

## Overview

IAgent lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IAgent.cs. It is a public interface; the inheritance chain is IAgent. It exposes 10 public/protected members: 5 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAgent is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IAgent. The surface is method-led (methods 5/10, properties 5/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IAgent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
