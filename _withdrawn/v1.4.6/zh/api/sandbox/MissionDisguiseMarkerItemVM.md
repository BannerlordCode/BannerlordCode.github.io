---
title: "MissionDisguiseMarkerItemVM"
description: "MissionDisguiseMarkerItemVM：SandBox.ViewModelCollection.Missions.MainAgentDetection 的 public 类，继承 ViewModel；公开成员 17 个（方法 2、属性 12、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionDisguiseMarkerItemVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionDisguiseMarkerItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionDisguiseMarkerItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionDisguiseMarkerItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 17 个：2 方法、12 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionDisguiseMarkerItemVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Missions.MainAgentDetection`，继承链 MissionDisguiseMarkerItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 12/17，方法 2/17），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MainAgentDetectionVM](../MainAgentDetectionVM/)
- [同命名空间 MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM/)
- [同命名空间 MissionLosingTargetVM](../MissionLosingTargetVM/)
