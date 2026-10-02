---
title: "SandBoxViewVisualManager"
description: "SandBoxViewVisualManager: a public class in SandBox.View; 14 exposed members (13 methods, 0 properties, 0 fields). Source: SandBox.View/SandBoxViewVisualManager.cs."
---
# SandBoxViewVisualManager

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public class SandBoxViewVisualManager`
**File:** `SandBox.View/SandBoxViewVisualManager.cs`

## Overview

SandBoxViewVisualManager lives in the SandBox.View module, source file SandBox.View/SandBoxViewVisualManager.cs. It is a public class; the inheritance chain is SandBoxViewVisualManager. It exposes 14 public/protected members: 13 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxViewVisualManager is a top-level type in SandBox.View, namespace matching the module directory; inheritance chain SandBoxViewVisualManager. The surface is method-led (methods 13/14, properties 0/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/SandBoxViewVisualManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandBoxViewVisualManager` | `public SandBoxViewVisualManager()` | constructor |
| `VisualTick` | `public static void VisualTick(MapScreen screen, float realDt, float dt)` | method |
| `OnTick` | `public static void OnTick(float realDt, float dt)` | method |
| `ClearVisualMemory` | `public static void ClearVisualMemory()` | method |
| `OnFrameTick` | `public static void OnFrameTick(float dt)` | method |
| `OnMouseClick` | `public static bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)` | method |
| `OnGameLoadFinished` | `public static void OnGameLoadFinished()` | method |
| `GetEntityComponent` | `public TComponent GetEntityComponent<TComponent>() where TComponent : CampaignEntityVisualComponent` | method |
| `AddEntityComponent` | `public TComponent AddEntityComponent<TComponent>() where TComponent : CampaignEntityVisualComponent, new()` | method |
| `RemoveEntityComponent` | `public void RemoveEntityComponent<TComponent>() where TComponent : CampaignEntityVisualComponent` | method |
| `Finalize` | `public void Finalize<TComponent>(TComponent component) where TComponent : CampaignEntityVisualComponent` | method |
| `RemoveEntityComponent` | `public void RemoveEntityComponent<TComponent>(TComponent component) where TComponent : CampaignEntityVisualComponent` | method |
| `List` | `public List<TComponent>GetComponents<TComponent>() where TComponent : CampaignEntityVisualComponent` | method |
| `MBList` | `public MBList<CampaignEntityVisualComponent>GetComponents()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMusicHandler](../CampaignMusicHandler)
- [same namespace IChangeableScreen](../IChangeableScreen)
- [same namespace MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier)
- [same namespace PreloadScreen](../PreloadScreen)
