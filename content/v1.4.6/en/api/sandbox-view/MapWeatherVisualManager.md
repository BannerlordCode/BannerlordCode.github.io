---
title: "MapWeatherVisualManager"
description: "MapWeatherVisualManager: a public class in SandBox.View, inheriting EntityVisualManagerBase<WeatherNode>; 14 exposed members (9 methods, 2 properties, 2 fields). Source: SandBox.View/Map/Managers/MapWeatherVisualManager.cs."
---
# MapWeatherVisualManager

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public class MapWeatherVisualManager : EntityVisualManagerBase<WeatherNode>`
**File:** `SandBox.View/Map/Managers/MapWeatherVisualManager.cs`

## Overview

MapWeatherVisualManager lives in the SandBox.View module, source file SandBox.View/Map/Managers/MapWeatherVisualManager.cs. It is a public class, implementing/inheriting EntityVisualManagerBase<WeatherNode>; the inheritance chain is MapWeatherVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. It exposes 14 public/protected members: 9 methods, 2 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapWeatherVisualManager is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Managers) the module directory; inheritance chain MapWeatherVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. The surface is method-led (methods 9/14, properties 2/14), so it mostly exposes operations. IEntityComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Managers/MapWeatherVisualManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MapWeatherVisualManager Current` | property |
| `Priority` | `public override int Priority` | property |
| `MapWeatherVisualManager` | `public MapWeatherVisualManager()` | constructor |
| `OnVisualTick` | `public override void OnVisualTick(MapScreen screen, float realDt, float dt)` | method |
| `SetRainData` | `public void SetRainData(int dataIndex, byte value)` | method |
| `SetCloudData` | `public void SetCloudData(int dataIndex, byte value)` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `GetRainPrefabFromPool` | `public GameEntity GetRainPrefabFromPool()` | method |
| `GetBlizzardPrefabFromPool` | `public GameEntity GetBlizzardPrefabFromPool()` | method |
| `ReleaseRainPrefab` | `public void ReleaseRainPrefab(GameEntity prefab)` | method |
| `ReleaseBlizzardPrefab` | `public void ReleaseBlizzardPrefab(GameEntity prefab)` | method |
| `MapEntityVisual` | `public override MapEntityVisual<WeatherNode>GetVisualOfEntity(WeatherNode entity)` | method |
| `DefaultCloudHeight` | `public const int DefaultCloudHeight` | field |
| `OpenSeaStormCloudHeight` | `public const int OpenSeaStormCloudHeight` | field |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EntityVisualManagerBase](../EntityVisualManagerBase)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase__1)
- [same namespace MapTracksVisualManager](../MapTracksVisualManager)
- [same namespace MobilePartyVisualManager](../MobilePartyVisualManager)
