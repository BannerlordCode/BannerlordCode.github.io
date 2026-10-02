---
title: "MissionDisguiseMarkerItemVM"
description: "MissionDisguiseMarkerItemVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 17 个（方法 2、属性 12、字段 0）。源文件 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs。"
---
# MissionDisguiseMarkerItemVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionDisguiseMarkerItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs`

## 概述

MissionDisguiseMarkerItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionDisguiseMarkerItemVM → ViewModel。public/protected 成员共 17 个：2 方法、12 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionDisguiseMarkerItemVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions.MainAgentDetection），继承链 MissionDisguiseMarkerItemVM → ViewModel。成员构成以属性为主（属性 12/17，方法 2/17），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OffenseInfo` | `public DisguiseMissionLogic.ShadowingAgentOffenseInfo OffenseInfo` | 属性 |
| `MissionDisguiseMarkerItemVM` | `public MissionDisguiseMarkerItemVM(Camera missionCamera, DisguiseMissionLogic.ShadowingAgentOffenseInfo offenseInfo)` | 构造函数 |
| `RefreshVisuals` | `public void RefreshVisuals()` | 方法 |
| `UpdatePosition` | `public void UpdatePosition()` | 方法 |
| `ScreenPosition` | `public Vec2 ScreenPosition` | 属性 |
| `AlarmProgress` | `public int AlarmProgress` | 属性 |
| `AlarmState` | `public string AlarmState` | 属性 |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier` | 属性 |
| `IsStealthModeEnabled` | `public bool IsStealthModeEnabled` | 属性 |
| `IsSuspicious` | `public bool IsSuspicious` | 属性 |
| `IsTarget` | `public bool IsTarget` | 属性 |
| `IsInVision` | `public bool IsInVision` | 属性 |
| `IsInVisibilityRange` | `public bool IsInVisibilityRange` | 属性 |
| `AgentAlarmStateEnum` | `public enum AgentAlarmStateEnum` | 属性 |
| `AgentStealthOffenseType` | `public enum AgentStealthOffenseType` | 属性 |
| `AgentAlarmStateEnum` | `public enum AgentAlarmStateEnum` | 嵌套类型 |
| `AgentStealthOffenseType` | `public enum AgentStealthOffenseType` | 嵌套类型 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MainAgentDetectionVM](../MainAgentDetectionVM)
- [同命名空间 MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM)
- [同命名空间 MissionLosingTargetVM](../MissionLosingTargetVM)
