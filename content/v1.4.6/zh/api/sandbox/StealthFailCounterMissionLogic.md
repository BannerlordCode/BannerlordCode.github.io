---
title: "StealthFailCounterMissionLogic"
description: "StealthFailCounterMissionLogic：SandBox 的 public 类，继承 MissionLogic；公开成员 7 个（方法 4、属性 2、字段 1）。源文件 SandBox/Missions/StealthFailCounterMissionLogic.cs。"
---
# StealthFailCounterMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class StealthFailCounterMissionLogic : MissionLogic`
**File:** `SandBox/Missions/StealthFailCounterMissionLogic.cs`

## 概述

StealthFailCounterMissionLogic 位于 SandBox 模块，源文件 SandBox/Missions/StealthFailCounterMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 StealthFailCounterMissionLogic → MissionLogic。public/protected 成员共 7 个：4 方法、2 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StealthFailCounterMissionLogic 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions），继承链 StealthFailCounterMissionLogic → MissionLogic。成员构成以方法为主（方法 4/7，属性 2/7），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/StealthFailCounterMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | 属性 |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime` | 属性 |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `SetFailTexts` | `public void SetFailTexts(TextObject title, TextObject description)` | 方法 |
| `FailCounterSeconds` | `public float FailCounterSeconds` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CameraJumpScript](../CameraJumpScript)
- [同命名空间 ChangeLightIntensityScript](../ChangeLightIntensityScript)
- [同命名空间 CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [同命名空间 CheckpointMissionLogic](../CheckpointMissionLogic)
