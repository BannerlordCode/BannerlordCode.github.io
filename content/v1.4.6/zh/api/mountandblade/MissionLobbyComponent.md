---
title: "MissionLobbyComponent"
description: "MissionLobbyComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 44 个（方法 33、属性 4、字段 1）。源文件 TaleWorlds.MountAndBlade/MissionLobbyComponent.cs。"
---
# MissionLobbyComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionLobbyComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyComponent.cs`

## 概述

MissionLobbyComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionLobbyComponent.cs。它是一个 public 类（abstract），实现/继承 MissionNetwork，继承链为 MissionLobbyComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 44 个：33 方法、4 属性、1 字段、5 事件、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionLobbyComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionLobbyComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 33/44，属性 4/44），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionLobbyComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPostMatchEnded;` | `public event Action OnPostMatchEnded;` | 事件 |
| `OnCultureSelectionRequested;` | `public event Action OnCultureSelectionRequested;` | 事件 |
| `bool>OnAdminMessageRequested;` | `public event Action<string, bool>OnAdminMessageRequested;` | 事件 |
| `OnClassRestrictionChanged;` | `public event Action OnClassRestrictionChanged;` | 事件 |
| `IsInWarmup` | `public bool IsInWarmup` | 属性 |
| `AddLobbyComponentType` | `public static void AddLobbyComponentType(Type type, LobbyMissionType missionType, bool isSeverComponent)` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `OnUdpNetworkHandlerClose` | `protected override void OnUdpNetworkHandlerClose()` | 方法 |
| `CreateBehavior` | `public static MissionLobbyComponent CreateBehavior()` | 方法 |
| `QuitMission` | `public virtual void QuitMission()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnUdpNetworkHandlerTick` | `protected override void OnUdpNetworkHandlerTick()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `IsClassAvailable` | `public bool IsClassAvailable(FormationClass formationClass)` | 方法 |
| `ChangeClassRestriction` | `public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool value)` | 方法 |
| `HandleNewClientConnect` | `protected override void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)` | 方法 |
| `HandleLateNewClientAfterLoadingFinished` | `protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `DespawnPlayer` | `public void DespawnPlayer(MissionPeer missionPeer)` | 方法 |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | 方法 |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | 方法 |
| `OnPlayerKills` | `protected virtual void OnPlayerKills(MissionPeer killerPeer, Agent killedAgent, MissionPeer assistorPeer)` | 方法 |
| `OnPlayerDies` | `protected virtual void OnPlayerDies(MissionPeer peer, MissionPeer affectorPeer, MissionPeer assistorPeer)` | 方法 |
| `OnBotKills` | `protected virtual void OnBotKills(Agent botAgent, Agent killedAgent)` | 方法 |
| `OnBotDies` | `protected virtual void OnBotDies(Agent botAgent, MissionPeer affectorPeer, MissionPeer assistorPeer)` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `GetSpawnPeriodDurationForPeer` | `public static int GetSpawnPeriodDurationForPeer(MissionPeer peer)` | 方法 |
| `SetStateEndingAsServer` | `public virtual void SetStateEndingAsServer()` | 方法 |
| `EndGameAsServer` | `protected virtual void EndGameAsServer()` | 方法 |
| `RequestCultureSelection` | `public void RequestCultureSelection()` | 方法 |
| `RequestAdminMessage` | `public void RequestAdminMessage(string message, bool isBroadcast)` | 方法 |
| `RequestTroopSelection` | `public void RequestTroopSelection()` | 方法 |
| `OnCultureSelected` | `public void OnCultureSelected(BasicCultureObject culture)` | 方法 |
| `MissionType` | `public MultiplayerGameType MissionType` | 属性 |
| `CurrentMultiplayerState` | `public MissionLobbyComponent.MultiplayerGameState CurrentMultiplayerState` | 属性 |
| `Action` | `public event Action<MissionLobbyComponent.MultiplayerGameState>CurrentMultiplayerStateChanged;` | 事件 |
| `GetRandomFaceSeedForCharacter` | `public int GetRandomFaceSeedForCharacter(BasicCharacterObject character, int addition = 0)` | 方法 |
| `MPHostChangeParam` | `public static string MPHostChangeParam(List<string>strings)` | 方法 |
| `PostMatchWaitDuration` | `public static readonly float PostMatchWaitDuration` | 字段 |
| `MultiplayerGameState` | `public enum MultiplayerGameState` | 属性 |
| `MultiplayerGameState` | `public enum MultiplayerGameState` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionNetwork](../MissionNetwork)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
