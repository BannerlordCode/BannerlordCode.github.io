---
title: "GameEntityComponent"
description: "GameEntityComponent: a public class in TaleWorlds.Engine, inheriting NativeObject; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/GameEntityComponent.cs."
---
# GameEntityComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class GameEntityComponent : NativeObject`
**File:** `TaleWorlds.Engine/GameEntityComponent.cs`

## Overview

GameEntityComponent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/GameEntityComponent.cs. It is a public class (abstract), implementing/inheriting NativeObject; the inheritance chain is GameEntityComponent → NativeObject. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameEntityComponent is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain GameEntityComponent → NativeObject. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. NativeObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/GameEntityComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEntity` | `public WeakGameEntity GetEntity()` | method |
| `GetFirstMetaMesh` | `public virtual MetaMesh GetFirstMetaMesh()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
