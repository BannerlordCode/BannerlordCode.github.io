---
title: "MissionSiegeEngineMarkerVM"
description: "MissionSiegeEngineMarkerVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 3、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs。"
---
# MissionSiegeEngineMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionSiegeEngineMarkerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs`

## 概述

MissionSiegeEngineMarkerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionSiegeEngineMarkerVM → ViewModel。public/protected 成员共 9 个：3 方法、4 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionSiegeEngineMarkerVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker），继承链 MissionSiegeEngineMarkerVM → ViewModel。成员构成以属性为主（属性 4/9，方法 3/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInitialized` | `public bool IsInitialized` | 属性 |
| `MissionSiegeEngineMarkerVM` | `public MissionSiegeEngineMarkerVM(Mission mission, Camera missionCamera)` | 构造函数 |
| `InitializeWith` | `public void InitializeWith(List<SiegeWeapon>siegeEngines)` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `MBBindingList` | `public MBBindingList<MissionSiegeEngineMarkerTargetVM>Targets` | 属性 |
| `IComparer` | `public class SiegeEngineMarkerDistanceComparer : IComparer<MissionSiegeEngineMarkerTargetVM>` | 属性 |
| `IComparer` | `public class SiegeEngineMarkerDistanceComparer : IComparer<MissionSiegeEngineMarkerTargetVM>` | 嵌套类型 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionFormationMarkerTargetVM](../MissionFormationMarkerTargetVM)
- [同命名空间 MissionFormationMarkerVM](../MissionFormationMarkerVM)
- [同命名空间 MissionSiegeEngineMarkerTargetVM](../MissionSiegeEngineMarkerTargetVM)
