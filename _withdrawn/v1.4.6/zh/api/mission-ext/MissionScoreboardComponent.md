---
title: "MissionScoreboardComponent"
description: "MissionScoreboardComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 41 个（方法 24、属性 8、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionScoreboardComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionScoreboardComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionScoreboardComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs。它是一个 public 类，实现/继承 MissionNetwork，继承链为 MissionScoreboardComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 41 个：24 方法、8 属性、6 事件、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionScoreboardComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionScoreboardComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 24/41，属性 8/41），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnRoundPropertiesChanged;` | `public event Action OnRoundPropertiesChanged;` | 事件 |
| `Action` | `public event Action<BattleSideEnum>OnBotPropertiesChanged;` | 事件 |
| `MissionPeer>OnPlayerSideChanged;` | `public event Action<Team, Team, MissionPeer>OnPlayerSideChanged;` | 事件 |
| `MissionPeer>OnPlayerPropertiesChanged;` | `public event Action<BattleSideEnum, MissionPeer>OnPlayerPropertiesChanged;` | 事件 |
| `int>OnMVPSelected;` | `public event Action<MissionPeer, int>OnMVPSelected;` | 事件 |
| `OnScoreboardInitialized;` | `public event Action OnScoreboardInitialized;` | 事件 |
| `IsOneSided` | `public bool IsOneSided` | 属性 |
| `RoundWinner` | `public BattleSideEnum RoundWinner` | 属性 |
| `MissionScoreboardComponent.ScoreboardHeader[]Headers` | `public MissionScoreboardComponent.ScoreboardHeader[]Headers` | 属性 |
| `MissionScoreboardComponent` | `public MissionScoreboardComponent(IScoreboardData scoreboardData)` | 构造函数 |
| `IEnumerable` | `public IEnumerable<BattleSideEnum>RoundWinnerList` | 属性 |
| `MissionScoreboardComponent.MissionScoreboardSide[]Sides` | `public MissionScoreboardComponent.MissionScoreboardSide[]Sides` | 属性 |
| `List` | `public List<MissionPeer>Spectators` | 属性 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `ResetBotScores` | `public void ResetBotScores()` | 方法 |
| `ChangeTeamScore` | `public void ChangeTeamScore(Team team, int scoreChange)` | 方法 |
| `GetSideSafe` | `public MissionScoreboardComponent.MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)` | 方法 |
| `GetRoundScore` | `public int GetRoundScore(BattleSideEnum side)` | 方法 |
| `HandleServerUpdateRoundScoresMessage` | `public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)` | 方法 |
| `HandleServerSetRoundMVP` | `public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)` | 方法 |
| `CalculateTotalNumbers` | `public void CalculateTotalNumbers()` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `OnPlayerConnectedToServer` | `public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)` | 方法 |
| `OnPlayerDisconnectedFromServer` | `public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnAssignPlayerAsSergeantOfFormation` | `public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)` | 方法 |
| `BotPropertiesChanged` | `public void BotPropertiesChanged(BattleSideEnum side)` | 方法 |
| `PlayerPropertiesChanged` | `public void PlayerPropertiesChanged(NetworkCommunicator player)` | 方法 |
| `PlayerPropertiesChanged` | `public void PlayerPropertiesChanged(MissionPeer player)` | 方法 |
| `HandleLateNewClientAfterSynchronized` | `protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |
| `HandleServerEventBotDataMessage` | `public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)` | 方法 |
| `OnRoundEnding` | `public void OnRoundEnding()` | 方法 |
| `OnMultiplayerGameClientBehaviorInitialized` | `public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator>onBotsControlledChanged)` | 方法 |
| `GetMatchWinnerSide` | `public BattleSideEnum GetMatchWinnerSide()` | 方法 |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 方法 |
| `ScoreboardHeader` | `public struct ScoreboardHeader` | 属性 |
| `MissionScoreboardSide` | `public class MissionScoreboardSide` | 属性 |
| `ScoreboardHeader` | `public struct ScoreboardHeader` | 嵌套类型 |
| `MissionScoreboardSide` | `public class MissionScoreboardSide` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionNetwork](../MissionNetwork/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
