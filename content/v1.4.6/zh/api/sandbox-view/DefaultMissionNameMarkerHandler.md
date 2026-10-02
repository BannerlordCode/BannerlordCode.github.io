---
title: "DefaultMissionNameMarkerHandler"
description: "DefaultMissionNameMarkerHandler：SandBox.View 的 public 类，继承 MissionNameMarkerProvider；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs。"
---
# DefaultMissionNameMarkerHandler

**Namespace:** `SandBox.View.Missions.NameMarkers`
**Module:** `SandBox.View`
**Type:** `public class DefaultMissionNameMarkerHandler : MissionNameMarkerProvider`
**File:** `SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs`

## 概述

DefaultMissionNameMarkerHandler 位于 SandBox.View 模块，源文件 SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs。它是一个 public 类，实现/继承 MissionNameMarkerProvider，继承链为 DefaultMissionNameMarkerHandler → MissionNameMarkerProvider。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultMissionNameMarkerHandler 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Missions.NameMarkers），继承链 DefaultMissionNameMarkerHandler → MissionNameMarkerProvider。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。继承链上的 MissionNameMarkerProvider 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `protected override void OnInitialize(Mission mission)` | 方法 |
| `OnDestroy` | `protected override void OnDestroy(Mission mission)` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `CreateMarkers` | `public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM>markers)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionNameMarkerUIHandler](../MissionNameMarkerUIHandler)
- [同命名空间 StealthNameMarkerProvider](../StealthNameMarkerProvider)
