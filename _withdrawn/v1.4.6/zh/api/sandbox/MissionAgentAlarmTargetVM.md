---
title: "MissionAgentAlarmTargetVM"
description: "MissionAgentAlarmTargetVM：SandBox.ViewModelCollection.Missions 的 public 类，继承 ViewModel；公开成员 14 个（方法 3、属性 10、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentAlarmTargetVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionAgentAlarmTargetVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionAgentAlarmTargetVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionAgentAlarmTargetVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 14 个：3 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentAlarmTargetVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Missions`，继承链 MissionAgentAlarmTargetVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 10/14，方法 3/14），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/MissionAgentAlarmTargetVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MissionAgentAlarmStateVM](../MissionAgentAlarmStateVM/)
- [同命名空间 MissionArenaPracticeFightVM](../MissionArenaPracticeFightVM/)
- [同命名空间 MissionQuestBarVM](../MissionQuestBarVM/)
