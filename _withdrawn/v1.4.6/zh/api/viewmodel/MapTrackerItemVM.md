---
title: "MapTrackerItemVM"
description: "MapTrackerItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker 的 public 类，继承 ViewModel；公开成员 27 个（方法 17、属性 9、字段 0）。canonical 桶 viewmodel。源文件 SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapTrackerItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MapTrackerItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

MapTrackerItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 MapTrackerItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 27 个：17 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapTrackerItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`，继承链 MapTrackerItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 17/27，属性 9/27），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapTrackerItemVM` | `public MapTrackerItemVM(ITrackableCampaignObject trackedObject)` | 构造函数 |
| `OnShowTooltip` | `protected abstract void OnShowTooltip();` | 方法 |
| `OnUpdateProperties` | `protected abstract void OnUpdateProperties();` | 方法 |
| `OnUpdatePosition` | `protected abstract void OnUpdatePosition(float screenX, float screenY, float screenW);` | 方法 |
| `OnToggleTrack` | `protected abstract void OnToggleTrack();` | 方法 |
| `OnGoToPosition` | `protected abstract void OnGoToPosition();` | 方法 |
| `OnRefreshBinding` | `protected abstract void OnRefreshBinding();` | 方法 |
| `IsVisibleOnMap` | `protected abstract bool IsVisibleOnMap();` | 方法 |
| `GetCanToggleTrack` | `protected abstract bool GetCanToggleTrack();` | 方法 |
| `GetTrackerType` | `protected abstract string GetTrackerType();` | 方法 |
| `GetRelatedQuests` | `protected abstract CampaignUIHelper.IssueQuestFlags GetRelatedQuests();` | 方法 |
| `UpdateProperties` | `public void UpdateProperties()` | 方法 |
| `UpdatePosition` | `public void UpdatePosition(float screenX, float screenY, float screenW)` | 方法 |
| `ExecuteToggleTrack` | `public void ExecuteToggleTrack()` | 方法 |
| `ExecuteGoToPosition` | `public void ExecuteGoToPosition()` | 方法 |
| `ExecuteShowTooltip` | `public void ExecuteShowTooltip()` | 方法 |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | 方法 |
| `RefreshBinding` | `public void RefreshBinding()` | 方法 |
| `IsTracked` | `public bool IsTracked` | 属性 |
| `CanToggleTrack` | `public bool CanToggleTrack` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsBehind` | `public bool IsBehind` | 属性 |
| `Name` | `public string Name` | 属性 |
| `TrackerType` | `public string TrackerType` | 属性 |
| `PartyPosition` | `public Vec2 PartyPosition` | 属性 |
| `FactionVisual` | `public BannerImageIdentifierVM FactionVisual` | 属性 |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapTrackerItemVM](../MapTrackerItemVM__1/)
