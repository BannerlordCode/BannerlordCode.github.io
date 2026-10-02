---
title: "IGameStateManagerOwner"
description: "IGameStateManagerOwner: a public interface in TaleWorlds.Core; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/IGameStateManagerOwner.cs."
---
# IGameStateManagerOwner

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IGameStateManagerOwner`
**File:** `TaleWorlds.Core/IGameStateManagerOwner.cs`

## Overview

IGameStateManagerOwner lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IGameStateManagerOwner.cs. It is a public interface; the inheritance chain is IGameStateManagerOwner. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IGameStateManagerOwner is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IGameStateManagerOwner. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IGameStateManagerOwner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnStateStackEmpty` | `void OnStateStackEmpty();` | method |
| `OnStateChanged` | `void OnStateChanged(GameState oldState);` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
