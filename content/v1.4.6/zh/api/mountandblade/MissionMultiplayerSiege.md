---
title: "MissionMultiplayerSiege"
description: "MissionMultiplayerSiege：TaleWorlds.MountAndBlade 的 public 类，继承 MissionMultiplayerGameModeBase、IAnalyticsFlagInfo；公开成员 33 个（方法 18、属性 3、字段 8）。源文件 TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs。"
---
# MissionMultiplayerSiege

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerSiege : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs`

## 概述

MissionMultiplayerSiege 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs。它是一个 public 类，实现/继承 MissionMultiplayerGameModeBase、IAnalyticsFlagInfo、IMissionBehavior，继承链为 MissionMultiplayerSiege → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 33 个：18 方法、3 属性、8 字段、2 事件、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMultiplayerSiege 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionMultiplayerSiege → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 18/33，属性 3/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals` | 属性 |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams` | 属性 |
| `OnDestructableComponentDestroyed;` | `public event MissionMultiplayerSiege.OnDestructableComponentDestroyedDelegate OnDestructableComponentDestroyed;` | 事件 |
| `OnObjectiveGoldGained;` | `public event MissionMultiplayerSiege.OnObjectiveGoldGainedDelegate OnObjectiveGoldGained;` | 事件 |
| `MBReadOnlyList` | `public MBReadOnlyList<FlagCapturePoint>AllCapturePoints` | 属性 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `GetMissionType` | `public override MultiplayerGameType GetMissionType()` | 方法 |
| `UseRoundController` | `public override bool UseRoundController()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `CheckForMatchEnd` | `public override bool CheckForMatchEnd()` | 方法 |
| `GetWinnerTeam` | `public override Team GetWinnerTeam()` | 方法 |
| `GetFlagOwnerTeam` | `public Team GetFlagOwnerTeam(FlagCapturePoint flag)` | 方法 |
| `CheckForWarmupEnd` | `public override bool CheckForWarmupEnd()` | 方法 |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |
| `OnPeerChangedTeam` | `public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `HandleNewClientAfterLoadingFinished` | `protected override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `NumberOfFlagsInGame` | `public const int NumberOfFlagsInGame` | 字段 |
| `NumberOfFlagsAffectingMoraleInGame` | `public const int NumberOfFlagsAffectingMoraleInGame` | 字段 |
| `MaxMorale` | `public const int MaxMorale` | 字段 |
| `StartingMorale` | `public const int StartingMorale` | 字段 |
| `MaxMoraleGainPerFlag` | `public const int MaxMoraleGainPerFlag` | 字段 |
| `MoraleGainPerFlag` | `public const int MoraleGainPerFlag` | 字段 |
| `GoldBonusOnFlagRemoval` | `public const int GoldBonusOnFlagRemoval` | 字段 |
| `MasterFlagTag` | `public const string MasterFlagTag` | 字段 |
| `OnDestructableComponentDestroyedDelegate` | `public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer[]contributors);` | 方法 |
| `OnObjectiveGoldGainedDelegate` | `public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain);` | 方法 |
| `OnDestructableComponentDestroyedDelegate` | `public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer[]contributors)` | 嵌套类型 |
| `OnObjectiveGoldGainedDelegate` | `public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain)` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionMultiplayerGameModeBase](../MissionMultiplayerGameModeBase)
- [基类/接口 IAnalyticsFlagInfo](../IAnalyticsFlagInfo)
- [基类/接口 IMissionBehavior](../IMissionBehavior)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
