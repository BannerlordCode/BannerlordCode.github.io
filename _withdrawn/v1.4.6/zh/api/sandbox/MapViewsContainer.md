---
title: "MapViewsContainer"
description: "MapViewsContainer：SandBox.View.Map 的 public 类；公开成员 11 个（方法 10、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Map/MapViewsContainer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapViewsContainer

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapViewsContainer`
**File:** `SandBox.View/Map/MapViewsContainer.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapViewsContainer 位于 SandBox.View 模块，源文件 SandBox.View/Map/MapViewsContainer.cs。它是一个 public 类，继承链为 MapViewsContainer。public/protected 成员共 11 个：10 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapViewsContainer 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map`，继承链 MapViewsContainer。成员构成以方法为主（方法 10/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/MapViewsContainer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapViewsContainer` | `public MapViewsContainer()` | 构造函数 |
| `Add` | `public void Add(MapView mapView)` | 方法 |
| `Remove` | `public void Remove(MapView mapView)` | 方法 |
| `Contains` | `public bool Contains(MapView mapView)` | 方法 |
| `Foreach` | `public void Foreach(Action<MapView>action)` | 方法 |
| `ForeachReverse` | `public void ForeachReverse(Action<MapView>action)` | 方法 |
| `ReturnFirstElementWithCondition` | `public MapView ReturnFirstElementWithCondition(Func<MapView, bool>condition)` | 方法 |
| `GetMapViewWithType` | `public T GetMapViewWithType<T>() where T : MapView` | 方法 |
| `GetContextToChangeTo` | `public TutorialContexts GetContextToChangeTo()` | 方法 |
| `IsThereAnyViewIsEscaped` | `public bool IsThereAnyViewIsEscaped()` | 方法 |
| `IsOpeningEscapeMenuOnFocusChangeAllowedForAll` | `public bool IsOpeningEscapeMenuOnFocusChangeAllowedForAll()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView/)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript/)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent/)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)
