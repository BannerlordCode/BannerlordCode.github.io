---
title: "MissionMultiplayerDuel"
description: "MissionMultiplayerDuel：TaleWorlds.MountAndBlade 的 public 类，继承 MissionMultiplayerGameModeBase；公开成员 25 个（方法 18、属性 2、字段 3）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerDuel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerDuel : MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionMultiplayerDuel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs。它是一个 public 类，实现/继承 MissionMultiplayerGameModeBase，继承链为 MissionMultiplayerDuel → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 25 个：18 方法、2 属性、3 字段、1 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMultiplayerDuel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionMultiplayerDuel → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 18/25，属性 2/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals` | 属性 |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams` | 属性 |
| `OnDuelEnded;` | `public event MissionMultiplayerDuel.OnDuelEndedDelegate OnDuelEnded;` | 事件 |
| `GetMissionType` | `public override MultiplayerGameType GetMissionType()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |
| `CheckIfPlayerCanDespawn` | `public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)` | 方法 |
| `OnPlayerDespawn` | `public void OnPlayerDespawn(MissionPeer missionPeer)` | 方法 |
| `DuelRequestReceived` | `public void DuelRequestReceived(MissionPeer requesterPeer, MissionPeer requesteePeer)` | 方法 |
| `DuelRequestAccepted` | `public void DuelRequestAccepted(Agent requesterAgent, Agent requesteeAgent)` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `GetDuelAreaIndexIfDuelTeam` | `public int GetDuelAreaIndexIfDuelTeam(Team team)` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `HandleLateNewClientAfterSynchronized` | `protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |
| `HandleEarlyPlayerDisconnect` | `protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` | 方法 |
| `HandlePlayerDisconnect` | `protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | 方法 |
| `DuelRequestTimeOutInSeconds` | `public const float DuelRequestTimeOutInSeconds` | 字段 |
| `NumberOfDuelAreas` | `public const int NumberOfDuelAreas` | 字段 |
| `DuelEndInSeconds` | `public const float DuelEndInSeconds` | 字段 |
| `OnDuelEndedDelegate` | `public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer, TroopType troopType);` | 方法 |
| `OnDuelEndedDelegate` | `public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer, TroopType troopType)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionMultiplayerGameModeBase](../MissionMultiplayerGameModeBase/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
