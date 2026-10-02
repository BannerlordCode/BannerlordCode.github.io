---
title: "VisualTrackerMissionBehavior"
description: "VisualTrackerMissionBehavior：SandBox 的 public 类，继承 MissionLogic；公开成员 9 个（方法 7、属性 1、字段 0）。源文件 SandBox/Missions/MissionLogics/VisualTrackerMissionBehavior.cs。"
---
# VisualTrackerMissionBehavior

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class VisualTrackerMissionBehavior : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/VisualTrackerMissionBehavior.cs`

## 概述

VisualTrackerMissionBehavior 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/VisualTrackerMissionBehavior.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 VisualTrackerMissionBehavior → MissionLogic。public/protected 成员共 9 个：7 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VisualTrackerMissionBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 VisualTrackerMissionBehavior → MissionLogic。成员构成以方法为主（方法 7/9，属性 1/9），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/VisualTrackerMissionBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `RegisterLocalOnlyObject` | `public void RegisterLocalOnlyObject(ITrackableBase obj)` | 方法 |
| `List` | `public override List<CompassItemUpdateParams>GetCompassTargets()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnAgentDeleted` | `public override void OnAgentDeleted(Agent affectedAgent)` | 方法 |
| `AgentTrackTypes` | `public enum AgentTrackTypes` | 属性 |
| `AgentTrackTypes` | `public enum AgentTrackTypes` | 嵌套类型 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
