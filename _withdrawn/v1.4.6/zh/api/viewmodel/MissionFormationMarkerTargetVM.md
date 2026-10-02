---
title: "MissionFormationMarkerTargetVM"
description: "MissionFormationMarkerTargetVM：TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker 的 public 类，继承 ViewModel；公开成员 19 个（方法 3、属性 14、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionFormationMarkerTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionFormationMarkerTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MissionFormationMarkerTargetVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionFormationMarkerTargetVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 19 个：3 方法、14 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionFormationMarkerTargetVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`，继承链 MissionFormationMarkerTargetVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 14/19，方法 3/19），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Formation` | `public Formation Formation` | 属性 |
| `MissionFormationMarkerTargetVM` | `public MissionFormationMarkerTargetVM(Formation formation)` | 构造函数 |
| `Refresh` | `public void Refresh()` | 方法 |
| `SetTargetedState` | `public void SetTargetedState(bool isFocused, bool isTargetingAFormation)` | 方法 |
| `GetFormationType` | `public static string GetFormationType(FormationClass formationType)` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsCenterOfFocus` | `public bool IsCenterOfFocus` | 属性 |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant` | 属性 |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation` | 属性 |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts` | 属性 |
| `FormationType` | `public string FormationType` | 属性 |
| `TeamType` | `public int TeamType` | 属性 |
| `ScreenPosition` | `public Vec2 ScreenPosition` | 属性 |
| `Distance` | `public float Distance` | 属性 |
| `DistanceText` | `public string DistanceText` | 属性 |
| `Size` | `public int Size` | 属性 |
| `WSign` | `public int WSign` | 属性 |
| `TeamTypes` | `public enum TeamTypes` | 属性 |
| `TeamTypes` | `public enum TeamTypes` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MissionFormationMarkerVM](../MissionFormationMarkerVM/)
- [同命名空间 MissionSiegeEngineMarkerTargetVM](../MissionSiegeEngineMarkerTargetVM/)
- [同命名空间 MissionSiegeEngineMarkerVM](../MissionSiegeEngineMarkerVM/)
