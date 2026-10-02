---
title: "GameHandler"
description: "GameHandler: a public class in TaleWorlds.Core, inheriting IEntityComponent; 12 exposed members (12 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/GameHandler.cs."
---
# GameHandler

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameHandler : IEntityComponent`
**File:** `TaleWorlds.Core/GameHandler.cs`

## Overview

GameHandler lives in the TaleWorlds.Core module, source file TaleWorlds.Core/GameHandler.cs. It is a public class (abstract), implementing/inheriting IEntityComponent; the inheritance chain is GameHandler → IEntityComponent. It exposes 12 public/protected members: 12 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameHandler is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain GameHandler → IEntityComponent. The surface is method-led (methods 12/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/GameHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `protected virtual void OnInitialize()` | method |
| `OnFinalize` | `protected virtual void OnFinalize()` | method |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | method |
| `OnGameStart` | `protected internal virtual void OnGameStart()` | method |
| `OnGameEnd` | `protected internal virtual void OnGameEnd()` | method |
| `OnGameNetworkBegin` | `protected internal virtual void OnGameNetworkBegin()` | method |
| `OnGameNetworkEnd` | `protected internal virtual void OnGameNetworkEnd()` | method |
| `OnEarlyPlayerConnect` | `protected internal virtual void OnEarlyPlayerConnect(VirtualPlayer peer)` | method |
| `OnPlayerConnect` | `protected internal virtual void OnPlayerConnect(VirtualPlayer peer)` | method |
| `OnPlayerDisconnect` | `protected internal virtual void OnPlayerDisconnect(VirtualPlayer peer)` | method |
| `OnBeforeSave` | `public abstract void OnBeforeSave();` | method |
| `OnAfterSave` | `public abstract void OnAfterSave();` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IEntityComponent](../IEntityComponent)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
