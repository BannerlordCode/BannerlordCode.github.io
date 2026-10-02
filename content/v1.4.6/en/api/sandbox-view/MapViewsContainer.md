---
title: "MapViewsContainer"
description: "MapViewsContainer: a public class in SandBox.View; 11 exposed members (10 methods, 0 properties, 0 fields). Source: SandBox.View/Map/MapViewsContainer.cs."
---
# MapViewsContainer

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapViewsContainer`
**File:** `SandBox.View/Map/MapViewsContainer.cs`

## Overview

MapViewsContainer lives in the SandBox.View module, source file SandBox.View/Map/MapViewsContainer.cs. It is a public class; the inheritance chain is MapViewsContainer. It exposes 11 public/protected members: 10 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapViewsContainer is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain MapViewsContainer. The surface is method-led (methods 10/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/MapViewsContainer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapViewsContainer` | `public MapViewsContainer()` | constructor |
| `Add` | `public void Add(MapView mapView)` | method |
| `Remove` | `public void Remove(MapView mapView)` | method |
| `Contains` | `public bool Contains(MapView mapView)` | method |
| `Foreach` | `public void Foreach(Action<MapView>action)` | method |
| `ForeachReverse` | `public void ForeachReverse(Action<MapView>action)` | method |
| `ReturnFirstElementWithCondition` | `public MapView ReturnFirstElementWithCondition(Func<MapView, bool>condition)` | method |
| `GetMapViewWithType` | `public T GetMapViewWithType<T>() where T : MapView` | method |
| `GetContextToChangeTo` | `public TutorialContexts GetContextToChangeTo()` | method |
| `IsThereAnyViewIsEscaped` | `public bool IsThereAnyViewIsEscaped()` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowedForAll` | `public bool IsOpeningEscapeMenuOnFocusChangeAllowedForAll()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace BlockadePositionScript](../BlockadePositionScript)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
