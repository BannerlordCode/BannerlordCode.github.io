---
title: "ThumbnailRenderRequest"
description: "ThumbnailRenderRequest: a public struct in TaleWorlds.Engine; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/ThumbnailRenderRequest.cs."
---
# ThumbnailRenderRequest

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct ThumbnailRenderRequest`
**File:** `TaleWorlds.Engine/ThumbnailRenderRequest.cs`

## Overview

ThumbnailRenderRequest lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ThumbnailRenderRequest.cs. It is a public struct; the inheritance chain is ThumbnailRenderRequest. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ThumbnailRenderRequest is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain ThumbnailRenderRequest. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ThumbnailRenderRequest.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateWithTexture` | `public static ThumbnailRenderRequest CreateWithTexture(Scene scene, Camera camera, Texture texture, GameEntity entity, string renderId, string debugName, int allocationGroupIndex)` | method |
| `CreateWithoutTexture` | `public static ThumbnailRenderRequest CreateWithoutTexture(Scene scene, Camera camera, GameEntity entity, string renderId, int width, int height, string debugName, int allocationGroupIndex)` | method |
| `CreateForCachedEntity` | `public static ThumbnailRenderRequest CreateForCachedEntity(Scene scene, Camera camera, Texture texture, string cachedEntityId, string renderId, string debugName, int allocationGroupIndex)` | method |
| `CreateForCachedEntityWithoutTexture` | `public static ThumbnailRenderRequest CreateForCachedEntityWithoutTexture(Scene scene, Camera camera, string cachedEntityId, string renderId, int width, int height, string debugName, int allocationGroupIndex)` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
