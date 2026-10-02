---
title: "MapSiegePOIVM"
description: "MapSiegePOIVM：SandBox.ViewModelCollection.MapSiege 的 public 类，继承 ViewModel；公开成员 31 个（方法 7、属性 21、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSiegePOIVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegePOIVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapSiegePOIVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapSiegePOIVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 31 个：7 方法、21 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapSiegePOIVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.MapSiege`，继承链 MapSiegePOIVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 21/31，方法 7/31），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Type` | `public MapSiegePOIVM.POIType Type` | 属性 |
| `MachineIndex` | `public int MachineIndex` | 属性 |
| `LatestW` | `public float LatestW` | 属性 |
| `Machine` | `public SiegeEvent.SiegeEngineConstructionProgress Machine` | 属性 |
| `MapSceneLocationFrame` | `public MatrixFrame MapSceneLocationFrame` | 属性 |
| `MapSiegePOIVM` | `public MapSiegePOIVM(MapSiegePOIVM.POIType type, MatrixFrame mapSceneLocation, Camera mapCamera, int machineIndex, Action<MapSiegePOIVM>onSelection)` | 构造函数 |
| `ExecuteSelection` | `public void ExecuteSelection()` | 方法 |
| `UpdateProperties` | `public void UpdateProperties()` | 方法 |
| `RefreshDistanceValue` | `public void RefreshDistanceValue(float newDistance)` | 方法 |
| `RefreshPosition` | `public void RefreshPosition()` | 方法 |
| `RefreshBinding` | `public void RefreshBinding()` | 方法 |
| `ExecuteShowTooltip` | `public void ExecuteShowTooltip()` | 方法 |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | 方法 |
| `Position` | `public Vec2 Position` | 属性 |
| `SidePrimaryColor` | `public Color SidePrimaryColor` | 属性 |
| `SideSecondaryColor` | `public Color SideSecondaryColor` | 属性 |
| `QueueIndex` | `public int QueueIndex` | 属性 |
| `MachineType` | `public int MachineType` | 属性 |
| `CurrentHitpoints` | `public float CurrentHitpoints` | 属性 |
| `MaxHitpoints` | `public float MaxHitpoints` | 属性 |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI` | 属性 |
| `IsFireVersion` | `public bool IsFireVersion` | 属性 |
| `IsInVisibleRange` | `public bool IsInVisibleRange` | 属性 |
| `IsConstructing` | `public bool IsConstructing` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `HasItem` | `public bool HasItem` | 属性 |
| `IsInside` | `public bool IsInside` | 属性 |
| `POIType` | `public enum POIType` | 属性 |
| `MachineTypes` | `public enum MachineTypes` | 属性 |
| `POIType` | `public enum POIType` | 嵌套类型 |
| `MachineTypes` | `public enum MachineTypes` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapSiegeProductionMachineVM](../MapSiegeProductionMachineVM/)
- [同命名空间 MapSiegeProductionVM](../MapSiegeProductionVM/)
- [同命名空间 MapSiegeVM](../MapSiegeVM/)
- [同命名空间 PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent/)
