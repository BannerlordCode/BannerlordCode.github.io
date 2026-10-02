---
title: "EntityVisualManagerBase"
description: "EntityVisualManagerBase: a public class in SandBox.View, inheriting CampaignEntityVisualComponent; 1 exposed members (0 methods, 1 properties, 0 fields). Source: SandBox.View/Map/Managers/EntityVisualManagerBase.cs."
---
# EntityVisualManagerBase

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public abstract class EntityVisualManagerBase : CampaignEntityVisualComponent`
**File:** `SandBox.View/Map/Managers/EntityVisualManagerBase.cs`

## Overview

EntityVisualManagerBase lives in the SandBox.View module, source file SandBox.View/Map/Managers/EntityVisualManagerBase.cs. It is a public class (abstract), implementing/inheriting CampaignEntityVisualComponent; the inheritance chain is EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. It exposes 1 public/protected members: 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EntityVisualManagerBase is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Managers) the module directory; inheritance chain EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. The surface is property-led (properties 1/1, methods 0/1), so it mostly exposes state for reading. IEntityComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Managers/EntityVisualManagerBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapScene` | `public Scene MapScene` | property |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase__1)
- [same namespace MapTracksVisualManager](../MapTracksVisualManager)
- [same namespace MapWeatherVisualManager](../MapWeatherVisualManager)
- [same namespace MobilePartyVisualManager](../MobilePartyVisualManager)
