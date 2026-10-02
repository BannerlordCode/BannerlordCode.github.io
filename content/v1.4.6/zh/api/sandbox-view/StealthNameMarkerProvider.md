---
title: "StealthNameMarkerProvider"
description: "StealthNameMarkerProvider：SandBox.View 的 public 类，继承 MissionNameMarkerProvider；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs。"
---
# StealthNameMarkerProvider

**Namespace:** `SandBox.View.Missions.NameMarkers`
**Module:** `SandBox.View`
**Type:** `public class StealthNameMarkerProvider : MissionNameMarkerProvider`
**File:** `SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs`

## 概述

StealthNameMarkerProvider 位于 SandBox.View 模块，源文件 SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs。它是一个 public 类，实现/继承 MissionNameMarkerProvider，继承链为 StealthNameMarkerProvider → MissionNameMarkerProvider。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StealthNameMarkerProvider 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Missions.NameMarkers），继承链 StealthNameMarkerProvider → MissionNameMarkerProvider。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。继承链上的 MissionNameMarkerProvider 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Missions/NameMarkers/StealthNameMarkerProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `protected override void OnInitialize(Mission mission)` | 方法 |
| `OnDestroy` | `protected override void OnDestroy(Mission mission)` | 方法 |
| `CreateMarkers` | `public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM>markers)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DefaultMissionNameMarkerHandler](../DefaultMissionNameMarkerHandler)
- [同命名空间 MissionNameMarkerUIHandler](../MissionNameMarkerUIHandler)
