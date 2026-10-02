---
title: "MapTrackerItemVM<T>"
description: "MapTrackerItemVM<T>：SandBox.ViewModelCollection 的 public 类，继承 MapTrackerItemVM；公开成员 7 个（方法 5、属性 1、字段 0）。源文件 SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs。"
---
# MapTrackerItemVM<T>

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MapTrackerItemVM<T>: MapTrackerItemVM where T : ITrackableCampaignObject`
**File:** `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs`

## 概述

MapTrackerItemVM<T> 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs。它是一个 public 类（abstract），实现/继承 MapTrackerItemVM，继承链为 MapTrackerItemVM → MapTrackerItemVM → ViewModel。public/protected 成员共 7 个：5 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapTrackerItemVM<T> 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker），继承链 MapTrackerItemVM → MapTrackerItemVM → ViewModel。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TrackedObject` | `public new T TrackedObject` | 属性 |
| `MapTrackerItemVM` | `protected MapTrackerItemVM(T trackableObject) : base(trackableObject)` | 构造函数 |
| `OnUpdateProperties` | `protected sealed override void OnUpdateProperties()` | 方法 |
| `OnUpdatePosition` | `protected sealed override void OnUpdatePosition(float screenX, float screenY, float screenW)` | 方法 |
| `OnToggleTrack` | `protected sealed override void OnToggleTrack()` | 方法 |
| `OnGoToPosition` | `protected sealed override void OnGoToPosition()` | 方法 |
| `OnRefreshBinding` | `protected sealed override void OnRefreshBinding()` | 方法 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapTrackerItemVM](../MapTrackerItemVM)
