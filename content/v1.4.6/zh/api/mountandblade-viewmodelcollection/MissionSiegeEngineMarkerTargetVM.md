---
title: "MissionSiegeEngineMarkerTargetVM"
description: "MissionSiegeEngineMarkerTargetVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 10 个（方法 1、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs。"
---
# MissionSiegeEngineMarkerTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionSiegeEngineMarkerTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs`

## 概述

MissionSiegeEngineMarkerTargetVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionSiegeEngineMarkerTargetVM → ViewModel。public/protected 成员共 10 个：1 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionSiegeEngineMarkerTargetVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker），继承链 MissionSiegeEngineMarkerTargetVM → ViewModel。成员构成以属性为主（属性 8/10，方法 1/10），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerTargetVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Engine` | `public SiegeWeapon Engine` | 属性 |
| `MissionSiegeEngineMarkerTargetVM` | `public MissionSiegeEngineMarkerTargetVM(SiegeWeapon engine, bool isEnemy)` | 构造函数 |
| `Refresh` | `public void Refresh()` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsEnemy` | `public bool IsEnemy` | 属性 |
| `EngineType` | `public string EngineType` | 属性 |
| `IsBehind` | `public bool IsBehind` | 属性 |
| `ScreenPosition` | `public Vec2 ScreenPosition` | 属性 |
| `Distance` | `public float Distance` | 属性 |
| `HitPoints` | `public int HitPoints` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionFormationMarkerTargetVM](../MissionFormationMarkerTargetVM)
- [同命名空间 MissionFormationMarkerVM](../MissionFormationMarkerVM)
- [同命名空间 MissionSiegeEngineMarkerVM](../MissionSiegeEngineMarkerVM)
