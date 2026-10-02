---
title: "MapWeatherVisualManager"
description: "MapWeatherVisualManager 的自动生成类参考。"
---
# MapWeatherVisualManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public class MapWeatherVisualManager : EntityVisualManagerBase<WeatherNode> `
**Base:** EntityVisualManagerBase<WeatherNode>
**Source:** SandBox.View/Map/Managers/MapWeatherVisualManager.cs

## 概述

`MapWeatherVisualManager` 的自动生成类参考页面。声明来自 `SandBox.View/Map/Managers/MapWeatherVisualManager.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnVisualTick
`public override void OnVisualTick(MapScreen screen,float realDt,float dt) `

### SetRainData
`public void SetRainData(int dataIndex,byte value) `

### SetCloudData
`public void SetCloudData(int dataIndex,byte value) `

### OnInitialize
`protected override void OnInitialize() `

### GetRainPrefabFromPool
`public GameEntity GetRainPrefabFromPool() `

### GetBlizzardPrefabFromPool
`public GameEntity GetBlizzardPrefabFromPool() `

### ReleaseRainPrefab
`public void ReleaseRainPrefab(GameEntity prefab) `

### ReleaseBlizzardPrefab
`public void ReleaseBlizzardPrefab(GameEntity prefab) `

### GetVisualOfEntity
`public override MapEntityVisual<WeatherNode> GetVisualOfEntity(WeatherNode entity) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
