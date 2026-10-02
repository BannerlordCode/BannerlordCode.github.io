---
title: "MapMobilePartyTrackItemVM"
description: "MapMobilePartyTrackItemVM：SandBox.ViewModelCollection 的 public 类，继承 MapTrackerItemVM<MobileParty>；公开成员 6 个（方法 5、属性 0、字段 0）。源文件 SandBox.ViewModelCollection/Map/Tracker/MapMobilePartyTrackItemVM.cs。"
---
# MapMobilePartyTrackItemVM

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapMobilePartyTrackItemVM : MapTrackerItemVM<MobileParty>`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapMobilePartyTrackItemVM.cs`

## 概述

MapMobilePartyTrackItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Map/Tracker/MapMobilePartyTrackItemVM.cs。它是一个 public 类，实现/继承 MapTrackerItemVM<MobileParty>，继承链为 MapMobilePartyTrackItemVM → MapTrackerItemVM → ViewModel。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapMobilePartyTrackItemVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Map.Tracker），继承链 MapMobilePartyTrackItemVM → MapTrackerItemVM → ViewModel。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Map/Tracker/MapMobilePartyTrackItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapMobilePartyTrackItemVM` | `public MapMobilePartyTrackItemVM(MobileParty party) : base(party)` | 构造函数 |
| `OnShowTooltip` | `protected override void OnShowTooltip()` | 方法 |
| `IsVisibleOnMap` | `protected override bool IsVisibleOnMap()` | 方法 |
| `GetCanToggleTrack` | `protected override bool GetCanToggleTrack()` | 方法 |
| `GetTrackerType` | `protected override string GetTrackerType()` | 方法 |
| `GetRelatedQuests` | `protected override CampaignUIHelper.IssueQuestFlags GetRelatedQuests()` | 方法 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MapTrackerItemVM](../MapTrackerItemVM)
- [同命名空间 MapArmyTrackItemVM](../MapArmyTrackItemVM)
- [同命名空间 MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM)
- [同命名空间 MapTrackerCollectionVM](../MapTrackerCollectionVM)
- [同命名空间 MapTrackerProvider](../MapTrackerProvider)
