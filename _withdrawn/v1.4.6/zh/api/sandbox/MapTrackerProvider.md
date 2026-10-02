---
title: "MapTrackerProvider"
description: "MapTrackerProvider：SandBox.ViewModelCollection.Map.Tracker 的 public 类；公开成员 5 个（方法 2、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapTrackerProvider

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapTrackerProvider`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapTrackerProvider 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs。它是一个 public 类，继承链为 MapTrackerProvider。public/protected 成员共 5 个：2 方法、1 事件、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapTrackerProvider 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Map.Tracker`，继承链 MapTrackerProvider。成员构成以方法为主（方法 2/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnTrackerAddedOrRemoved` | `public event MapTrackerProvider.OnTrackerAddedOrRemovedDelegate OnTrackerAddedOrRemoved` | 事件 |
| `MapTrackerProvider` | `public MapTrackerProvider()` | 构造函数 |
| `MapTrackerItemVM[]GetTrackers` | `public MapTrackerItemVM[]GetTrackers()` | 方法 |
| `OnTrackerAddedOrRemovedDelegate` | `public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added);` | 方法 |
| `OnTrackerAddedOrRemovedDelegate` | `public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 MapArmyTrackItemVM](../MapArmyTrackItemVM/)
- [同命名空间 MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM/)
- [同命名空间 MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM/)
- [同命名空间 MapTrackerCollectionVM](../MapTrackerCollectionVM/)
