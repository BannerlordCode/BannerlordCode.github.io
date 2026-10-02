---
title: "MapSiegeVM"
description: "MapSiegeVM：SandBox.ViewModelCollection.MapSiege 的 public 类，继承 ViewModel；公开成员 11 个（方法 3、属性 6、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSiegeVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegeVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapSiegeVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapSiegeVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 11 个：3 方法、6 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapSiegeVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.MapSiege`，继承链 MapSiegeVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 6/11，方法 3/11），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapSiegeVM` | `public MapSiegeVM(Camera mapCamera, MatrixFrame[]batteringRamFrames, MatrixFrame[]rangedSiegeEngineFrames, MatrixFrame[]towerSiegeEngineFrames, MatrixFrame[]defenderSiegeEngineFrames, MatrixFrame[]breachableWallFrames)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnSelectionFromScene` | `public void OnSelectionFromScene(MatrixFrame frameOfEngine)` | 方法 |
| `Update` | `public void Update(float mapCameraDistanceValue)` | 方法 |
| `PreparationProgress` | `public float PreparationProgress` | 属性 |
| `IsPreparationsCompleted` | `public bool IsPreparationsCompleted` | 属性 |
| `PreparationTitleText` | `public string PreparationTitleText` | 属性 |
| `ProductionController` | `public MapSiegeProductionVM ProductionController` | 属性 |
| `MBBindingList` | `public MBBindingList<MapSiegePOIVM>PointsOfInterest` | 属性 |
| `IComparer` | `public class SiegePOIDistanceComparer : IComparer<MapSiegePOIVM>` | 属性 |
| `IComparer` | `public class SiegePOIDistanceComparer : IComparer<MapSiegePOIVM>` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapSiegePOIVM](../MapSiegePOIVM/)
- [同命名空间 MapSiegeProductionMachineVM](../MapSiegeProductionMachineVM/)
- [同命名空间 MapSiegeProductionVM](../MapSiegeProductionVM/)
- [同命名空间 PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent/)
