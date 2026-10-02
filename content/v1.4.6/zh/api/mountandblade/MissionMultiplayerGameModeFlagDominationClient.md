---
title: "MissionMultiplayerGameModeFlagDominationClient"
description: "MissionMultiplayerGameModeFlagDominationClient：TaleWorlds.MountAndBlade 的 public 类，继承 MissionMultiplayerGameModeBaseClient、ICommanderInfo；公开成员 33 个（方法 20、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs。"
---
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerGameModeFlagDominationClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs`

## 概述

MissionMultiplayerGameModeFlagDominationClient 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs。它是一个 public 类，实现/继承 MissionMultiplayerGameModeBaseClient、ICommanderInfo、IMissionBehavior，继承链为 MissionMultiplayerGameModeFlagDominationClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 33 个：20 方法、7 属性、6 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMultiplayerGameModeFlagDominationClient 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionMultiplayerGameModeFlagDominationClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 20/33，属性 7/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold` | 属性 |
| `IsGameModeTactical` | `public override bool IsGameModeTactical` | 属性 |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown` | 属性 |
| `GameType` | `public override MultiplayerGameType GameType` | 属性 |
| `IsGameModeUsingCasualGold` | `public override bool IsGameModeUsingCasualGold` | 属性 |
| `Action` | `public event Action<NetworkCommunicator>OnBotsControlledChangedEvent;` | 事件 |
| `float>OnTeamPowerChangedEvent;` | `public event Action<BattleSideEnum, float>OnTeamPowerChangedEvent;` | 事件 |
| `float>OnMoraleChangedEvent;` | `public event Action<BattleSideEnum, float>OnMoraleChangedEvent;` | 事件 |
| `OnFlagNumberChangedEvent;` | `public event Action OnFlagNumberChangedEvent;` | 事件 |
| `Team>OnCapturePointOwnerChangedEvent;` | `public event Action<FlagCapturePoint, Team>OnCapturePointOwnerChangedEvent;` | 事件 |
| `Action` | `public event Action<GoldGain>OnGoldGainEvent;` | 事件 |
| `IEnumerable` | `public IEnumerable<FlagCapturePoint>AllCapturePoints` | 属性 |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent` | 属性 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `OnPreparationEnded` | `public void OnPreparationEnded()` | 方法 |
| `GetMissionCameraLockMode` | `public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `GetWarningTimer` | `protected override int GetWarningTimer()` | 方法 |
| `GetFlagOwner` | `public Team GetFlagOwner(FlagCapturePoint flag)` | 方法 |
| `OnTeamPowerChanged` | `public void OnTeamPowerChanged(BattleSideEnum teamSide, float power)` | 方法 |
| `OnMoraleChanged` | `public void OnMoraleChanged(float morale)` | 方法 |
| `OnGoldAmountChangedForRepresentative` | `public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)` | 方法 |
| `OnNumberOfFlagsChanged` | `public void OnNumberOfFlagsChanged()` | 方法 |
| `OnBotsControlledChanged` | `public void OnBotsControlledChanged(MissionPeer missionPeer, int botAliveCount, int botTotalCount)` | 方法 |
| `OnCapturePointOwnerChanged` | `public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)` | 方法 |
| `OnRequestForfeitSpawn` | `public void OnRequestForfeitSpawn()` | 方法 |
| `List` | `public override List<CompassItemUpdateParams>GetCompassTargets()` | 方法 |
| `GetGoldAmount` | `public override int GetGoldAmount()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionMultiplayerGameModeBaseClient](../MissionMultiplayerGameModeBaseClient)
- [基类/接口 ICommanderInfo](../ICommanderInfo)
- [基类/接口 IMissionBehavior](../IMissionBehavior)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
