---
title: "MissionNameMarkerTargetBaseVM"
description: "MissionNameMarkerTargetBaseVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 19 个（方法 6、属性 12、字段 0）。源文件 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs。"
---
# MissionNameMarkerTargetBaseVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MissionNameMarkerTargetBaseVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs`

## 概述

MissionNameMarkerTargetBaseVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 MissionNameMarkerTargetBaseVM → ViewModel。public/protected 成员共 19 个：6 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionNameMarkerTargetBaseVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions.NameMarker），继承链 MissionNameMarkerTargetBaseVM → ViewModel。成员构成以属性为主（属性 12/19，方法 6/19），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionNameMarkerTargetBaseVM` | `public MissionNameMarkerTargetBaseVM()` | 构造函数 |
| `UpdatePosition` | `public abstract void UpdatePosition(Camera missionCamera);` | 方法 |
| `Equals` | `public abstract bool Equals(MissionNameMarkerTargetBaseVM other);` | 方法 |
| `GetName` | `protected abstract TextObject GetName();` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdatePositionWith` | `protected void UpdatePositionWith(Camera missionCamera, Vec3 worldPosition)` | 方法 |
| `SetEnabledState` | `public void SetEnabledState(bool enabled)` | 方法 |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | 属性 |
| `ScreenPosition` | `public Vec2 ScreenPosition` | 属性 |
| `Name` | `public string Name` | 属性 |
| `IconType` | `public string IconType` | 属性 |
| `NameType` | `public string NameType` | 属性 |
| `Distance` | `public int Distance` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsTracked` | `public bool IsTracked` | 属性 |
| `IsQuestMainStory` | `public bool IsQuestMainStory` | 属性 |
| `IsEnemy` | `public bool IsEnemy` | 属性 |
| `IsFriendly` | `public bool IsFriendly` | 属性 |
| `IsPersistent` | `public bool IsPersistent` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionNameMarkerFactory](../MissionNameMarkerFactory)
- [同命名空间 MissionNameMarkerHelper](../MissionNameMarkerHelper)
- [同命名空间 MissionNameMarkerProvider](../MissionNameMarkerProvider)
- [同命名空间 MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1)
