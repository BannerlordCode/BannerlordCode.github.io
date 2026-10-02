---
title: "MissionAgentAlarmStateVM"
description: "MissionAgentAlarmStateVM：SandBox.ViewModelCollection.Missions 的 public 类，继承 ViewModel；公开成员 9 个（方法 6、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentAlarmStateVM

**Namespace:** `SandBox.ViewModelCollection.Missions`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MissionAgentAlarmStateVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionAgentAlarmStateVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionAgentAlarmStateVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 9 个：6 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentAlarmStateVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Missions`，继承链 MissionAgentAlarmStateVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 6/9，属性 2/9），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentAlarmStateVM` | `public MissionAgentAlarmStateVM()` | 构造函数 |
| `Initialize` | `public void Initialize(Mission mission, Camera camera)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Update` | `public void Update()` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | 方法 |
| `OnAgentBuild` | `public void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAgentTeamChanged` | `public void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | 方法 |
| `MBBindingList` | `public MBBindingList<MissionAgentAlarmTargetVM>Targets` | 属性 |
| `IsMainAgentInSafeArea` | `public bool IsMainAgentInSafeArea` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MissionAgentAlarmTargetVM](../MissionAgentAlarmTargetVM/)
- [同命名空间 MissionArenaPracticeFightVM](../MissionArenaPracticeFightVM/)
- [同命名空间 MissionQuestBarVM](../MissionQuestBarVM/)
