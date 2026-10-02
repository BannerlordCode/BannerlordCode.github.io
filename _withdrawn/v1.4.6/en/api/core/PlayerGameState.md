---
title: "PlayerGameState"
description: "PlayerGameState: a public class in TaleWorlds.Core, inheriting GameState; 1 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.Core/PlayerGameState.cs."
---
# PlayerGameState

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class PlayerGameState : GameState`
**File:** `TaleWorlds.Core/PlayerGameState.cs`

## Overview

PlayerGameState lives in the TaleWorlds.Core module, source file TaleWorlds.Core/PlayerGameState.cs. It is a public class (abstract), implementing/inheriting GameState; the inheritance chain is PlayerGameState → GameState → MBObjectBase. It exposes 1 public/protected members: 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerGameState is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain PlayerGameState → GameState → MBObjectBase. The surface is property-led (properties 1/1, methods 0/1), so it mostly exposes state for reading. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/PlayerGameState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Peer` | `public VirtualPlayer Peer` | property |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GameState](../GameState)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
