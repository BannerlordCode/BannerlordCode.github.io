---
title: "MapWeatherVisualManager"
description: "MapWeatherVisualManager：SandBox.View.Map.Managers 的 public 类，继承 EntityVisualManagerBase<WeatherNode>；公开成员 14 个（方法 9、属性 2、字段 2）。canonical 桶 sandbox。源文件 SandBox.View/Map/Managers/MapWeatherVisualManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapWeatherVisualManager

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public class MapWeatherVisualManager : EntityVisualManagerBase<WeatherNode>`
**File:** `SandBox.View/Map/Managers/MapWeatherVisualManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapWeatherVisualManager 位于 SandBox.View 模块，源文件 SandBox.View/Map/Managers/MapWeatherVisualManager.cs。它是一个 public 类，实现/继承 EntityVisualManagerBase<WeatherNode>，继承链为 MapWeatherVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent。public/protected 成员共 14 个：9 方法、2 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapWeatherVisualManager 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map.Managers`，继承链 MapWeatherVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent。成员构成以方法为主（方法 9/14，属性 2/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Managers/MapWeatherVisualManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MapWeatherVisualManager Current` | 属性 |
| `Priority` | `public override int Priority` | 属性 |
| `MapWeatherVisualManager` | `public MapWeatherVisualManager()` | 构造函数 |
| `OnVisualTick` | `public override void OnVisualTick(MapScreen screen, float realDt, float dt)` | 方法 |
| `SetRainData` | `public void SetRainData(int dataIndex, byte value)` | 方法 |
| `SetCloudData` | `public void SetCloudData(int dataIndex, byte value)` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `GetRainPrefabFromPool` | `public GameEntity GetRainPrefabFromPool()` | 方法 |
| `GetBlizzardPrefabFromPool` | `public GameEntity GetBlizzardPrefabFromPool()` | 方法 |
| `ReleaseRainPrefab` | `public void ReleaseRainPrefab(GameEntity prefab)` | 方法 |
| `ReleaseBlizzardPrefab` | `public void ReleaseBlizzardPrefab(GameEntity prefab)` | 方法 |
| `MapEntityVisual` | `public override MapEntityVisual<WeatherNode>GetVisualOfEntity(WeatherNode entity)` | 方法 |
| `DefaultCloudHeight` | `public const int DefaultCloudHeight` | 字段 |
| `OpenSeaStormCloudHeight` | `public const int OpenSeaStormCloudHeight` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 EntityVisualManagerBase](../EntityVisualManagerBase/)
- [同命名空间 EntityVisualManagerBase](../EntityVisualManagerBase/)
- [同命名空间 EntityVisualManagerBase](../EntityVisualManagerBase__1/)
- [同命名空间 MapTracksVisualManager](../MapTracksVisualManager/)
- [同命名空间 MobilePartyVisualManager](../MobilePartyVisualManager/)
