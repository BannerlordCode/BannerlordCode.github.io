---
title: "PrisonBreakMissionController"
description: "PrisonBreakMissionController：SandBox 的 public 类，继承 MissionLogic；公开成员 12 个（方法 11、属性 0、字段 0）。源文件 SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs。"
---
# PrisonBreakMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Towns`
**Module:** `SandBox`
**Type:** `public class PrisonBreakMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs`

## 概述

PrisonBreakMissionController 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 PrisonBreakMissionController → MissionLogic。public/protected 成员共 12 个：11 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PrisonBreakMissionController 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics.Towns），继承链 PrisonBreakMissionController → MissionLogic。成员构成以方法为主（方法 11/12，属性 0/12），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PrisonBreakMissionController` | `public PrisonBreakMissionController(CharacterObject prisonerCharacter)` | 构造函数 |
| `OnCreated` | `public override void OnCreated()` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | 方法 |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | 方法 |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canLeave)` | 方法 |
| `OnStealthMissionCounterFailed` | `public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlleyFightMissionHandler](../AlleyFightMissionHandler)
- [同命名空间 TownCenterMissionController](../TownCenterMissionController)
- [同命名空间 WorkshopMissionHandler](../WorkshopMissionHandler)
