---
title: "PlayerStartEngineConstructionEvent"
description: "PlayerStartEngineConstructionEvent: a public class in SandBox.ViewModelCollection, inheriting EventBase; 2 exposed members (0 methods, 1 properties, 0 fields). Source: SandBox.ViewModelCollection/MapSiege/PlayerStartEngineConstructionEvent.cs."
---
# PlayerStartEngineConstructionEvent

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class PlayerStartEngineConstructionEvent : EventBase`
**File:** `SandBox.ViewModelCollection/MapSiege/PlayerStartEngineConstructionEvent.cs`

## Overview

PlayerStartEngineConstructionEvent lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/MapSiege/PlayerStartEngineConstructionEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is PlayerStartEngineConstructionEvent → EventBase. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerStartEngineConstructionEvent is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.MapSiege) the module directory; inheritance chain PlayerStartEngineConstructionEvent → EventBase. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/MapSiege/PlayerStartEngineConstructionEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Engine` | `public SiegeEngineType Engine` | property |
| `PlayerStartEngineConstructionEvent` | `public PlayerStartEngineConstructionEvent(SiegeEngineType engine)` | constructor |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSiegePOIVM](../MapSiegePOIVM)
- [same namespace MapSiegeProductionMachineVM](../MapSiegeProductionMachineVM)
- [same namespace MapSiegeProductionVM](../MapSiegeProductionVM)
- [same namespace MapSiegeVM](../MapSiegeVM)
