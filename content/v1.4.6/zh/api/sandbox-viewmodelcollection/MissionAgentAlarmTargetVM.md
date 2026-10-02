---
title: "MissionAgentAlarmTargetVM"
description: "MissionAgentAlarmTargetVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 14 个（方法 3、属性 10、字段 0）。源文件 SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs。"
---
# MissionAgentAlarmTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionAgentAlarmTargetVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs`

## 概述

MissionAgentAlarmTargetVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionAgentAlarmTargetVM → ViewModel。public/protected 成员共 14 个：3 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentAlarmTargetVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Missions），继承链 MissionAgentAlarmTargetVM → ViewModel。成员构成以属性为主（属性 10/14，方法 3/14），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasCautiousness` | `public bool HasCautiousness` | 属性 |
| `AlarmedBehaviorGroup` | `public AlarmedBehaviorGroup AlarmedBehaviorGroup` | 属性 |
| `MissionAgentAlarmTargetVM` | `public MissionAgentAlarmTargetVM(Agent agent, Action<MissionAgentAlarmTargetVM>onRemove)` | 构造函数 |
| `UpdateValues` | `public void UpdateValues()` | 方法 |
| `UpdateScreenPosition` | `public void UpdateScreenPosition(Camera missionCamera)` | 方法 |
| `ExecuteRemove` | `public void ExecuteRemove()` | 方法 |
| `IsStealthModeEnabled` | `public bool IsStealthModeEnabled` | 属性 |
| `IsMainAgentInVisibilityRange` | `public bool IsMainAgentInVisibilityRange` | 属性 |
| `IsInVision` | `public bool IsInVision` | 属性 |
| `IsSuspected` | `public bool IsSuspected` | 属性 |
| `AlarmProgress` | `public int AlarmProgress` | 属性 |
| `AlarmState` | `public string AlarmState` | 属性 |
| `WSign` | `public int WSign` | 属性 |
| `ScreenPosition` | `public Vec2 ScreenPosition` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MissionAgentAlarmStateVM](../MissionAgentAlarmStateVM)
- [同命名空间 MissionArenaPracticeFightVM](../MissionArenaPracticeFightVM)
- [同命名空间 MissionQuestBarVM](../MissionQuestBarVM)
