---
title: "MissionStealthAreaNameMarkerTargetVM"
description: "MissionStealthAreaNameMarkerTargetVM：SandBox.ViewModelCollection 的 public 类，继承 MissionNameMarkerTargetVM<StealthAreaMarker>；公开成员 3 个（方法 2、属性 0、字段 0）。源文件 SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaNameMarkerTargetVM.cs。"
---
# MissionStealthAreaNameMarkerTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionStealthAreaNameMarkerTargetVM : MissionNameMarkerTargetVM<StealthAreaMarker>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaNameMarkerTargetVM.cs`

## 概述

MissionStealthAreaNameMarkerTargetVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaNameMarkerTargetVM.cs。它是一个 public 类，实现/继承 MissionNameMarkerTargetVM<StealthAreaMarker>，继承链为 MissionStealthAreaNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionStealthAreaNameMarkerTargetVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout），继承链 MissionStealthAreaNameMarkerTargetVM → MissionNameMarkerTargetVM → MissionNameMarkerTargetBaseVM → ViewModel。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaNameMarkerTargetVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionStealthAreaNameMarkerTargetVM` | `public MissionStealthAreaNameMarkerTargetVM(StealthAreaMarker target, Vec3 position) : base(target)` | 构造函数 |
| `UpdatePosition` | `public override void UpdatePosition(Camera missionCamera)` | 方法 |
| `GetName` | `protected override TextObject GetName()` | 方法 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionNameMarkerTargetVM](../MissionNameMarkerTargetVM__1)
- [同命名空间 MissionStealthAreaUsePointNameMarkerTargetVM](../MissionStealthAreaUsePointNameMarkerTargetVM)
- [同命名空间 MissionStealthFailCounterVM](../MissionStealthFailCounterVM)
- [同命名空间 MissionStealthSentryNameMarkerTargetVM](../MissionStealthSentryNameMarkerTargetVM)
