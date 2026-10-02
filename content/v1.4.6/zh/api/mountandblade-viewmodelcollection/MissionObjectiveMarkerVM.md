---
title: "MissionObjectiveMarkerVM"
description: "MissionObjectiveMarkerVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 10 个（方法 3、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs。"
---
# MissionObjectiveMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionObjectiveMarkerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs`

## 概述

MissionObjectiveMarkerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionObjectiveMarkerVM → ViewModel。public/protected 成员共 10 个：3 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionObjectiveMarkerVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective），继承链 MissionObjectiveMarkerVM → ViewModel。成员构成以属性为主（属性 6/10，方法 3/10），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionObjectiveMarkerVM` | `public MissionObjectiveMarkerVM(MissionObjectiveTarget target)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateActiveState` | `public void UpdateActiveState()` | 方法 |
| `UpdatePosition` | `public void UpdatePosition(Camera missionCamera)` | 方法 |
| `Distance` | `public int Distance` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `ScreenPosition` | `public Vec2 ScreenPosition` | 属性 |
| `ObjectiveTypeId` | `public string ObjectiveTypeId` | 属性 |
| `ObjectiveName` | `public string ObjectiveName` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionObjectiveMarkersVM](../MissionObjectiveMarkersVM)
- [同命名空间 MissionObjectiveVM](../MissionObjectiveVM)
