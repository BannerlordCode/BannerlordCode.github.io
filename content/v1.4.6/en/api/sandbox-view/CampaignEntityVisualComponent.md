---
title: "CampaignEntityVisualComponent"
description: "CampaignEntityVisualComponent: a public class in SandBox.View, inheriting IEntityComponent; 10 exposed members (9 methods, 1 properties, 0 fields). Source: SandBox.View/Map/CampaignEntityVisualComponent.cs."
---
# CampaignEntityVisualComponent

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class CampaignEntityVisualComponent : IEntityComponent`
**File:** `SandBox.View/Map/CampaignEntityVisualComponent.cs`

## Overview

CampaignEntityVisualComponent lives in the SandBox.View module, source file SandBox.View/Map/CampaignEntityVisualComponent.cs. It is a public class, implementing/inheriting IEntityComponent; the inheritance chain is CampaignEntityVisualComponent → IEntityComponent. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignEntityVisualComponent is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain CampaignEntityVisualComponent → IEntityComponent. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. IEntityComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/CampaignEntityVisualComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnVisualTick` | `public virtual void OnVisualTick(MapScreen screen, float realDt, float dt)` | method |
| `OnMouseClick` | `public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)` | method |
| `OnVisualIntersected` | `public virtual bool OnVisualIntersected(Ray mouseRay, UIntPtr[]intersectedEntityIDs, Intersection[]intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)` | method |
| `OnFrameTick` | `public virtual void OnFrameTick(float dt)` | method |
| `OnGameLoadFinished` | `public virtual void OnGameLoadFinished()` | method |
| `OnTick` | `public virtual void OnTick(float realDt, float dt)` | method |
| `ClearVisualMemory` | `public virtual void ClearVisualMemory()` | method |
| `OnInitialize` | `protected virtual void OnInitialize()` | method |
| `OnFinalize` | `protected virtual void OnFinalize()` | method |
| `Priority` | `public virtual int Priority` | property |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace BlockadePositionScript](../BlockadePositionScript)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
- [same namespace HeirSelectionPopupView](../HeirSelectionPopupView)
