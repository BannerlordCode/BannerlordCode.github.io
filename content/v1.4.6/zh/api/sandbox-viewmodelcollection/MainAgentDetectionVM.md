---
title: "MainAgentDetectionVM"
description: "MainAgentDetectionVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 2、属性 7、字段 0）。源文件 SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs。"
---
# MainAgentDetectionVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MainAgentDetectionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs`

## 概述

MainAgentDetectionVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MainAgentDetectionVM → ViewModel。public/protected 成员共 9 个：2 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MainAgentDetectionVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions.MainAgentDetection），继承链 MainAgentDetectionVM → ViewModel。成员构成以属性为主（属性 7/9，方法 2/9），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/MainAgentDetection/MainAgentDetectionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateDetectionValues` | `public void UpdateDetectionValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)` | 方法 |
| `HasDetection` | `public bool HasDetection` | 属性 |
| `HasReachedSuspicionTreshold` | `public bool HasReachedSuspicionTreshold` | 属性 |
| `MinimumDetectionLevel` | `public float MinimumDetectionLevel` | 属性 |
| `MaximumDetectionLevel` | `public float MaximumDetectionLevel` | 属性 |
| `CurrentDetectionLevel` | `public float CurrentDetectionLevel` | 属性 |
| `CurrentDetectionLevelRatio` | `public float CurrentDetectionLevelRatio` | 属性 |
| `SuspicionFullText` | `public string SuspicionFullText` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM)
- [同命名空间 MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM)
- [同命名空间 MissionLosingTargetVM](../MissionLosingTargetVM)
