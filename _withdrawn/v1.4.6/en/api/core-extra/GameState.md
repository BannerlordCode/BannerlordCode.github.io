---
title: "GameState"
description: "GameState: a public class in TaleWorlds.Core, inheriting MBObjectBase; 17 exposed members (9 methods, 7 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/GameState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameState

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameState : MBObjectBase`
**File:** `TaleWorlds.Core/GameState.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

GameState lives in the TaleWorlds.Core module, source file TaleWorlds.Core/GameState.cs. It is a public class (abstract), implementing/inheriting MBObjectBase; the inheritance chain is GameState → MBObjectBase. It exposes 17 public/protected members: 9 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameState lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain GameState → MBObjectBase. The surface is method-led (methods 9/17, properties 7/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/GameState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Predecessor` | `public GameState Predecessor` | property |
| `IsActive` | `public bool IsActive` | property |
| `IReadOnlyCollection` | `public IReadOnlyCollection<IGameStateListener>Listeners` | property |
| `GameStateManager` | `public GameStateManager GameStateManager` | property |
| `IsMusicMenuState` | `public virtual bool IsMusicMenuState` | property |
| `IsMenuState` | `public virtual bool IsMenuState` | property |
| `GameState` | `protected GameState()` | constructor |
| `RegisterListener` | `public bool RegisterListener(IGameStateListener listener)` | method |
| `UnregisterListener` | `public bool UnregisterListener(IGameStateListener listener)` | method |
| `GetListenerOfType` | `public T GetListenerOfType<T>()` | method |
| `OnInitialize` | `protected virtual void OnInitialize()` | method |
| `OnFinalize` | `protected virtual void OnFinalize()` | method |
| `Activated` | `public bool Activated` | property |
| `OnActivate` | `protected virtual void OnActivate()` | method |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | method |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | method |
| `OnIdleTick` | `protected internal virtual void OnIdleTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
