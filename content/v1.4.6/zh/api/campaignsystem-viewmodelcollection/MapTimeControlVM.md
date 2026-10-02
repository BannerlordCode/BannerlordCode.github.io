---
title: "MapTimeControlVM"
description: "MapTimeControlVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 31 个（方法 6、属性 24、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs。"
---
# MapTimeControlVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapTimeControlVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs`

## 概述

MapTimeControlVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapTimeControlVM → ViewModel。public/protected 成员共 31 个：6 方法、24 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapTimeControlVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar），继承链 MapTimeControlVM → ViewModel。成员构成以属性为主（属性 24/31，方法 6/31），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapTimeControlVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInBattleSimulation` | `public bool IsInBattleSimulation` | 属性 |
| `IsInRecruitment` | `public bool IsInRecruitment` | 属性 |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen` | 属性 |
| `IsInArmyManagement` | `public bool IsInArmyManagement` | 属性 |
| `IsInTownManagement` | `public bool IsInTownManagement` | 属性 |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage` | 属性 |
| `IsInMap` | `public bool IsInMap` | 属性 |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions` | 属性 |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened` | 属性 |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive` | 属性 |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive` | 属性 |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive` | 属性 |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive` | 属性 |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled` | 属性 |
| `MapTimeControlVM` | `public MapTimeControlVM(Func<MapBarShortcuts>getMapBarShortcuts, Action onTimeFlowStateChange, Action onCameraResetted)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Tick` | `public void Tick()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `ExecuteTimeControlChange` | `public void ExecuteTimeControlChange(int selectedTimeSpeed)` | 方法 |
| `ExecuteResetCamera` | `public void ExecuteResetCamera()` | 方法 |
| `TimeOfDayHint` | `public BasicTooltipViewModel TimeOfDayHint` | 属性 |
| `IsCurrentlyPausedOnMap` | `public bool IsCurrentlyPausedOnMap` | 属性 |
| `IsCenterPanelEnabled` | `public bool IsCenterPanelEnabled` | 属性 |
| `Time` | `public double Time` | 属性 |
| `PausedText` | `public string PausedText` | 属性 |
| `Date` | `public string Date` | 属性 |
| `TimeFlowState` | `public int TimeFlowState` | 属性 |
| `PauseHint` | `public BasicTooltipViewModel PauseHint` | 属性 |
| `PlayHint` | `public BasicTooltipViewModel PlayHint` | 属性 |
| `FastForwardHint` | `public BasicTooltipViewModel FastForwardHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapBarShortcuts](../MapBarShortcuts)
- [同命名空间 MapBarVM](../MapBarVM)
- [同命名空间 MapInfoItemVM](../MapInfoItemVM)
- [同命名空间 MapInfoVM](../MapInfoVM)
