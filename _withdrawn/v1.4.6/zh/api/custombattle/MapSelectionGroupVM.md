---
title: "MapSelectionGroupVM"
description: "MapSelectionGroupVM：TaleWorlds.MountAndBlade.CustomBattle.CustomBattle 的 public 类，继承 ViewModel；公开成员 26 个（方法 4、属性 21、字段 0）。canonical 桶 custombattle。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSelectionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class MapSelectionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## 概述

MapSelectionGroupVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapSelectionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 26 个：4 方法、21 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapSelectionGroupVM 落在 canonical 桶 `custombattle`（命中规则 `rule:TaleWorlds.MountAndBlade.CustomBattle`），命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`，继承链 MapSelectionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 21/26，方法 4/26），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedWallBreachedCount` | `public int SelectedWallBreachedCount` | 属性 |
| `SelectedSceneLevel` | `public int SelectedSceneLevel` | 属性 |
| `SelectedTimeOfDay` | `public int SelectedTimeOfDay` | 属性 |
| `SelectedSeasonId` | `public string SelectedSeasonId` | 属性 |
| `SelectedMap` | `public MapItemVM SelectedMap` | 属性 |
| `MapSelectionGroupVM` | `public MapSelectionGroupVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSallyOutChange` | `public void ExecuteSallyOutChange()` | 方法 |
| `OnGameTypeChange` | `public void OnGameTypeChange(string gameTypeStringId)` | 方法 |
| `RandomizeAll` | `public void RandomizeAll()` | 方法 |
| `SelectorVM` | `public SelectorVM<MapItemVM>MapSelection` | 属性 |
| `SelectorVM` | `public SelectorVM<SceneLevelItemVM>SceneLevelSelection` | 属性 |
| `SelectorVM` | `public SelectorVM<WallHitpointItemVM>WallHitpointSelection` | 属性 |
| `SelectorVM` | `public SelectorVM<SeasonItemVM>SeasonSelection` | 属性 |
| `SelectorVM` | `public SelectorVM<TimeOfDayItemVM>TimeOfDaySelection` | 属性 |
| `IsCurrentMapSiege` | `public bool IsCurrentMapSiege` | 属性 |
| `IsSallyOutSelected` | `public bool IsSallyOutSelected` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `MapText` | `public string MapText` | 属性 |
| `SeasonText` | `public string SeasonText` | 属性 |
| `TimeOfDayText` | `public string TimeOfDayText` | 属性 |
| `SceneLevelText` | `public string SceneLevelText` | 属性 |
| `WallHitpointsText` | `public string WallHitpointsText` | 属性 |
| `AttackerSiegeMachinesText` | `public string AttackerSiegeMachinesText` | 属性 |
| `DefenderSiegeMachinesText` | `public string DefenderSiegeMachinesText` | 属性 |
| `SalloutText` | `public string SalloutText` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CustomBattleCompositionData](../CustomBattleCompositionData/)
- [同命名空间 CustomBattleData](../CustomBattleData/)
- [同命名空间 CustomBattleHelper](../CustomBattleHelper/)
- [同命名空间 CustomBattlePlayerSide](../CustomBattlePlayerSide/)
