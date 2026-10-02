---
title: "MapTracksVisualManager"
description: "MapTracksVisualManager：SandBox.View 的 public 类，继承 EntityVisualManagerBase<Track>；公开成员 9 个（方法 6、属性 2、字段 0）。源文件 SandBox.View/Map/Managers/MapTracksVisualManager.cs。"
---
# MapTracksVisualManager

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public class MapTracksVisualManager : EntityVisualManagerBase<Track>`
**File:** `SandBox.View/Map/Managers/MapTracksVisualManager.cs`

## 概述

MapTracksVisualManager 位于 SandBox.View 模块，源文件 SandBox.View/Map/Managers/MapTracksVisualManager.cs。它是一个 public 类，实现/继承 EntityVisualManagerBase<Track>，继承链为 MapTracksVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent。public/protected 成员共 9 个：6 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapTracksVisualManager 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map.Managers），继承链 MapTracksVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent。成员构成以方法为主（方法 6/9，属性 2/9），对外主要以操作入口暴露。继承链上的 IEntityComponent 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Managers/MapTracksVisualManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MapTracksVisualManager Current` | 属性 |
| `Priority` | `public override int Priority` | 属性 |
| `MapTracksVisualManager` | `public MapTracksVisualManager()` | 构造函数 |
| `OnVisualTick` | `public override void OnVisualTick(MapScreen screen, float realDt, float dt)` | 方法 |
| `OnVisualIntersected` | `public override bool OnVisualIntersected(Ray mouseRay, UIntPtr[]intersectedEntityIDs, Intersection[]intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)` | 方法 |
| `OnGameLoadFinished` | `public override void OnGameLoadFinished()` | 方法 |
| `MapEntityVisual` | `public override MapEntityVisual<Track>GetVisualOfEntity(Track entity)` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EntityVisualManagerBase](../EntityVisualManagerBase)
- [同命名空间 EntityVisualManagerBase](../EntityVisualManagerBase)
- [同命名空间 EntityVisualManagerBase](../EntityVisualManagerBase__1)
- [同命名空间 MapWeatherVisualManager](../MapWeatherVisualManager)
- [同命名空间 MobilePartyVisualManager](../MobilePartyVisualManager)
