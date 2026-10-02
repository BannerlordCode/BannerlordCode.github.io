---
title: "EntityVisualManagerBase<TEntity>"
description: "EntityVisualManagerBase<TEntity>: a public class in SandBox.View, inheriting EntityVisualManagerBase; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox.View/Map/Managers/EntityVisualManagerBase.2.cs."
---
# EntityVisualManagerBase<TEntity>

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public abstract class EntityVisualManagerBase<TEntity>: EntityVisualManagerBase`
**File:** `SandBox.View/Map/Managers/EntityVisualManagerBase.2.cs`

## Overview

EntityVisualManagerBase<TEntity> lives in the SandBox.View module, source file SandBox.View/Map/Managers/EntityVisualManagerBase.2.cs. It is a public class (abstract), implementing/inheriting EntityVisualManagerBase; the inheritance chain is EntityVisualManagerBase → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EntityVisualManagerBase<TEntity> is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Managers) the module directory; inheritance chain EntityVisualManagerBase → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. IEntityComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Managers/EntityVisualManagerBase.2.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapEntityVisual` | `public abstract MapEntityVisual<TEntity>GetVisualOfEntity(TEntity entity);` | method |
| `EntityVisualManagerBase` | `public static EntityVisualManagerBase<TEntity>GetEntityVisualManagerBase()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase)
- [same namespace MapTracksVisualManager](../MapTracksVisualManager)
- [same namespace MapWeatherVisualManager](../MapWeatherVisualManager)
- [same namespace MobilePartyVisualManager](../MobilePartyVisualManager)
