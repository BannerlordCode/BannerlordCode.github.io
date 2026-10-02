---
title: "MapSiegeProductionVM"
description: "MapSiegeProductionVM：SandBox.ViewModelCollection.MapSiege 的 public 类，继承 ViewModel；公开成员 8 个（方法 4、属性 3、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSiegeProductionVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegeProductionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapSiegeProductionVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapSiegeProductionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 8 个：4 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapSiegeProductionVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.MapSiege`，继承链 MapSiegeProductionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 4/8，属性 3/8），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/MapSiege/MapSiegeProductionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LatestSelectedPOI` | `public MapSiegePOIVM LatestSelectedPOI` | 属性 |
| `MapSiegeProductionVM` | `public MapSiegeProductionVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Update` | `public void Update()` | 方法 |
| `OnMachineSelection` | `public void OnMachineSelection(MapSiegePOIVM poi)` | 方法 |
| `ExecuteDisable` | `public void ExecuteDisable()` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `MBBindingList` | `public MBBindingList<MapSiegeProductionMachineVM>PossibleProductionMachines` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapSiegePOIVM](../MapSiegePOIVM/)
- [同命名空间 MapSiegeProductionMachineVM](../MapSiegeProductionMachineVM/)
- [同命名空间 MapSiegeVM](../MapSiegeVM/)
- [同命名空间 PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent/)
