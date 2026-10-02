---
title: "CheckpointMissionLogic"
description: "CheckpointMissionLogic：SandBox 的 public 类，继承 MissionLogic；公开成员 7 个（方法 6、属性 0、字段 0）。源文件 SandBox/Missions/CheckpointMissionLogic.cs。"
---
# CheckpointMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class CheckpointMissionLogic : MissionLogic`
**File:** `SandBox/Missions/CheckpointMissionLogic.cs`

## 概述

CheckpointMissionLogic 位于 SandBox 模块，源文件 SandBox/Missions/CheckpointMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 CheckpointMissionLogic → MissionLogic。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CheckpointMissionLogic 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions），继承链 CheckpointMissionLogic → MissionLogic。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/CheckpointMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheckpointMissionLogic` | `public CheckpointMissionLogic()` | 构造函数 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | 方法 |
| `OnEarlyAgentRemoved` | `public override void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnCheckpointUsed` | `public void OnCheckpointUsed(int checkpointUniqueId)` | 方法 |
| `RegisterAgent` | `public void RegisterAgent(Agent agent)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CameraJumpScript](../CameraJumpScript)
- [同命名空间 ChangeLightIntensityScript](../ChangeLightIntensityScript)
- [同命名空间 CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [同命名空间 CivilianPortShipSpawnMissionLogic](../CivilianPortShipSpawnMissionLogic)
