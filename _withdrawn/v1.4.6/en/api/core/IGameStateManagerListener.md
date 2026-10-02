---
title: "IGameStateManagerListener"
description: "IGameStateManagerListener: a public interface in TaleWorlds.Core; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/IGameStateManagerListener.cs."
---
# IGameStateManagerListener

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IGameStateManagerListener`
**File:** `TaleWorlds.Core/IGameStateManagerListener.cs`

## Overview

IGameStateManagerListener lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IGameStateManagerListener.cs. It is a public interface; the inheritance chain is IGameStateManagerListener. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IGameStateManagerListener is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IGameStateManagerListener. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IGameStateManagerListener.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCreateState` | `void OnCreateState(GameState gameState);` | method |
| `OnPushState` | `void OnPushState(GameState gameState, bool isTopGameState);` | method |
| `OnPopState` | `void OnPopState(GameState gameState);` | method |
| `OnCleanStates` | `void OnCleanStates();` | method |
| `OnSavedGameLoadFinished` | `void OnSavedGameLoadFinished();` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
