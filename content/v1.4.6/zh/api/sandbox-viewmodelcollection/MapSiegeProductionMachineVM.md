---
title: "MapSiegeProductionMachineVM"
description: "MapSiegeProductionMachineVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 12 个（方法 4、属性 6、字段 0）。源文件 SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs。"
---
# MapSiegeProductionMachineVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapSiegeProductionMachineVM : ViewModel`
**File:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs`

## 概述

MapSiegeProductionMachineVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapSiegeProductionMachineVM → ViewModel。public/protected 成员共 12 个：4 方法、6 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapSiegeProductionMachineVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.MapSiege），继承链 MapSiegeProductionMachineVM → ViewModel。成员构成以属性为主（属性 6/12，方法 4/12），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Engine` | `public SiegeEngineType Engine` | 属性 |
| `MapSiegeProductionMachineVM` | `public MapSiegeProductionMachineVM(SiegeEngineType engineType, int number, Action<MapSiegeProductionMachineVM>onSelection)` | 构造函数 |
| `MapSiegeProductionMachineVM` | `public MapSiegeProductionMachineVM(Action<MapSiegeProductionMachineVM>onSelection, bool isCancel)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnSelection` | `public void OnSelection()` | 方法 |
| `ExecuteShowTooltip` | `public void ExecuteShowTooltip()` | 方法 |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | 方法 |
| `MachineType` | `public int MachineType` | 属性 |
| `MachineID` | `public string MachineID` | 属性 |
| `NumberOfMachines` | `public int NumberOfMachines` | 属性 |
| `ActionText` | `public string ActionText` | 属性 |
| `IsReserveOption` | `public bool IsReserveOption` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapSiegePOIVM](../MapSiegePOIVM)
- [同命名空间 MapSiegeProductionVM](../MapSiegeProductionVM)
- [同命名空间 MapSiegeVM](../MapSiegeVM)
- [同命名空间 PlayerStartEngineConstructionEvent](../PlayerStartEngineConstructionEvent)
