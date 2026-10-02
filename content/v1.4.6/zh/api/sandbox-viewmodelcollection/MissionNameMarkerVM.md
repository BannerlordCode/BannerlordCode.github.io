---
title: "MissionNameMarkerVM"
description: "MissionNameMarkerVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 8 个（方法 4、属性 3、字段 0）。源文件 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs。"
---
# MissionNameMarkerVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionNameMarkerVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs`

## 概述

MissionNameMarkerVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionNameMarkerVM → ViewModel。public/protected 成员共 8 个：4 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionNameMarkerVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions.NameMarker），继承链 MissionNameMarkerVM → ViewModel。成员构成以方法为主（方法 4/8，属性 3/8），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsTargetsAdded` | `public bool IsTargetsAdded` | 属性 |
| `MissionNameMarkerVM` | `public MissionNameMarkerVM(List<MissionNameMarkerProvider>providers, Camera missionCamera)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `SetTargetsDirty` | `public void SetTargetsDirty()` | 方法 |
| `MBBindingList` | `public MBBindingList<MissionNameMarkerTargetBaseVM>Targets` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionNameMarkerFactory](../MissionNameMarkerFactory)
- [同命名空间 MissionNameMarkerHelper](../MissionNameMarkerHelper)
- [同命名空间 MissionNameMarkerProvider](../MissionNameMarkerProvider)
- [同命名空间 MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM)
