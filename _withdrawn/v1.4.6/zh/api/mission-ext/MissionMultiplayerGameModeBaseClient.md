---
title: "MissionMultiplayerGameModeBaseClient"
description: "MissionMultiplayerGameModeBaseClient：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork、ICameraModeLogic；公开成员 27 个（方法 10、属性 17、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerGameModeBaseClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionMultiplayerGameModeBaseClient : MissionNetwork, ICameraModeLogic`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionMultiplayerGameModeBaseClient 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs。它是一个 public 类（abstract），实现/继承 MissionNetwork、ICameraModeLogic，继承链为 MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 27 个：10 方法、17 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMultiplayerGameModeBaseClient 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以属性为主（属性 17/27，方法 10/27），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionLobbyComponent` | `public MissionLobbyComponent MissionLobbyComponent` | 属性 |
| `MissionNetworkComponent` | `public MissionNetworkComponent MissionNetworkComponent` | 属性 |
| `ScoreboardComponent` | `public MissionScoreboardComponent ScoreboardComponent` | 属性 |
| `NotificationsComponent` | `public MultiplayerGameNotificationsComponent NotificationsComponent` | 属性 |
| `WarmupComponent` | `public MultiplayerWarmupComponent WarmupComponent` | 属性 |
| `RoundComponent` | `public IRoundComponent RoundComponent` | 属性 |
| `TimerComponent` | `public MultiplayerTimerComponent TimerComponent` | 属性 |
| `IsGameModeUsingGold` | `public abstract bool IsGameModeUsingGold` | 属性 |
| `IsGameModeTactical` | `public abstract bool IsGameModeTactical` | 属性 |
| `IsGameModeUsingCasualGold` | `public virtual bool IsGameModeUsingCasualGold` | 属性 |
| `IsGameModeUsingRoundCountdown` | `public abstract bool IsGameModeUsingRoundCountdown` | 属性 |
| `IsGameModeUsingAllowCultureChange` | `public virtual bool IsGameModeUsingAllowCultureChange` | 属性 |
| `IsGameModeUsingAllowTroopChange` | `public virtual bool IsGameModeUsingAllowTroopChange` | 属性 |
| `GameType` | `public abstract MultiplayerGameType GameType` | 属性 |
| `GetGoldAmount` | `public abstract int GetGoldAmount();` | 方法 |
| `GetMissionCameraLockMode` | `public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)` | 方法 |
| `IsRoundInProgress` | `public bool IsRoundInProgress` | 属性 |
| `IsInWarmup` | `public bool IsInWarmup` | 属性 |
| `RemainingTime` | `public float RemainingTime` | 属性 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `CheckTimer` | `public bool CheckTimer(out int remainingTime, out int remainingWarningTime, bool forceUpdate = false)` | 方法 |
| `GetWarningTimer` | `protected virtual int GetWarningTimer()` | 方法 |
| `OnGoldAmountChangedForRepresentative` | `public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount);` | 方法 |
| `CanRequestTroopChange` | `public virtual bool CanRequestTroopChange()` | 方法 |
| `CanRequestCultureChange` | `public virtual bool CanRequestCultureChange()` | 方法 |
| `IsClassAvailable` | `public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionNetwork](../MissionNetwork/)
- [基类/接口 ICameraModeLogic](../../core-extra/ICameraModeLogic/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
