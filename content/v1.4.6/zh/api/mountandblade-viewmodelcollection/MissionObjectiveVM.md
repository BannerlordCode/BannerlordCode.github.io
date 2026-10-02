---
title: "MissionObjectiveVM"
description: "MissionObjectiveVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 18 个（方法 4、属性 13、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs。"
---
# MissionObjectiveVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionObjectiveVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs`

## 概述

MissionObjectiveVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionObjectiveVM → ViewModel。public/protected 成员共 18 个：4 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionObjectiveVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective），继承链 MissionObjectiveVM → ViewModel。成员构成以属性为主（属性 13/18，方法 4/18），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionObjectiveVM` | `public MissionObjectiveVM(MissionObjectiveLogic objectiveLogic, Camera missionCamera)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `UpdateObjective` | `public void UpdateObjective(MissionObjective objective)` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `Title` | `public string Title` | 属性 |
| `Description` | `public string Description` | 属性 |
| `ProgressText` | `public string ProgressText` | 属性 |
| `ObjectiveGiverName` | `public string ObjectiveGiverName` | 属性 |
| `HasObjectiveGiver` | `public bool HasObjectiveGiver` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `HasTitle` | `public bool HasTitle` | 属性 |
| `HasDescription` | `public bool HasDescription` | 属性 |
| `HasProgress` | `public bool HasProgress` | 属性 |
| `CurrentProgress` | `public int CurrentProgress` | 属性 |
| `RequiredProgress` | `public int RequiredProgress` | 属性 |
| `ObjectiveGiverIdentifier` | `public CharacterImageIdentifierVM ObjectiveGiverIdentifier` | 属性 |
| `Markers` | `public MissionObjectiveMarkersVM Markers` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionObjectiveMarkersVM](../MissionObjectiveMarkersVM)
- [同命名空间 MissionObjectiveMarkerVM](../MissionObjectiveMarkerVM)
