---
title: "MissionLocationLogic"
description: "MissionLocationLogic：SandBox 的 public 类，继承 MissionLogic；公开成员 7 个（方法 6、属性 0、字段 0）。源文件 SandBox/Missions/MissionLogics/MissionLocationLogic.cs。"
---
# MissionLocationLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionLocationLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionLocationLogic.cs`

## 概述

MissionLocationLogic 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/MissionLocationLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 MissionLocationLogic → MissionLogic。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionLocationLogic 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.MissionLogics），继承链 MissionLocationLogic → MissionLogic。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。继承链上的 MissionLogic 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/MissionLocationLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionLocationLogic` | `public MissionLocationLogic(Location location, string specialPlayerTag = null)` | 构造函数 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnCreated` | `public override void OnCreated()` | 方法 |
| `SpawnCharactersAccompanyingPlayer` | `public void SpawnCharactersAccompanyingPlayer(bool noHorse)` | 方法 |
| `GetSpawnFrameOfPassage` | `public MatrixFrame GetSpawnFrameOfPassage(Location location)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleAgentLogic](../BattleAgentLogic)
- [同命名空间 BattleSurgeonLogic](../BattleSurgeonLogic)
- [同命名空间 CampaignMissionComponent](../CampaignMissionComponent)
- [同命名空间 CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
