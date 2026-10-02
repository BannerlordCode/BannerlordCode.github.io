---
title: "GameManagerComponent"
description: "GameManagerComponent: a public class in TaleWorlds.Core, inheriting IEntityComponent; 9 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/GameManagerComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameManagerComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameManagerComponent : IEntityComponent`
**File:** `TaleWorlds.Core/GameManagerComponent.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

GameManagerComponent lives in the TaleWorlds.Core module, source file TaleWorlds.Core/GameManagerComponent.cs. It is a public class (abstract), implementing/inheriting IEntityComponent; the inheritance chain is GameManagerComponent → IEntityComponent. It exposes 9 public/protected members: 8 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameManagerComponent lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain GameManagerComponent → IEntityComponent. The surface is method-led (methods 8/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/GameManagerComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GameManager` | `public GameManagerBase GameManager` | property |
| `OnInitialize` | `protected virtual void OnInitialize()` | method |
| `OnFinalize` | `protected virtual void OnFinalize()` | method |
| `OnTick` | `protected internal virtual void OnTick()` | method |
| `OnPlayerDisconnect` | `protected internal virtual void OnPlayerDisconnect(VirtualPlayer peer)` | method |
| `OnEarlyPlayerConnect` | `protected internal virtual void OnEarlyPlayerConnect(VirtualPlayer peer)` | method |
| `OnPlayerConnect` | `protected internal virtual void OnPlayerConnect(VirtualPlayer peer)` | method |
| `OnGameNetworkBegin` | `protected internal virtual void OnGameNetworkBegin()` | method |
| `OnGameNetworkEnd` | `protected internal virtual void OnGameNetworkEnd()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IEntityComponent](../IEntityComponent/)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
