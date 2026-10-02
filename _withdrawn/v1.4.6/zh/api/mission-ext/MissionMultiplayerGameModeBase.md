---
title: "MissionMultiplayerGameModeBase"
description: "MissionMultiplayerGameModeBase：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 33 个（方法 26、属性 4、字段 3）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerGameModeBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionMultiplayerGameModeBase : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionMultiplayerGameModeBase 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs。它是一个 public 类（abstract），实现/继承 MissionNetwork，继承链为 MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 33 个：26 方法、4 属性、3 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionMultiplayerGameModeBase 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 26/33，属性 4/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public abstract bool IsGameModeHidingAllAgentVisuals` | 属性 |
| `IsGameModeUsingOpposingTeams` | `public abstract bool IsGameModeUsingOpposingTeams` | 属性 |
| `IsGameModeAllowChargeDamageOnFriendly` | `public virtual bool IsGameModeAllowChargeDamageOnFriendly` | 属性 |
| `SpawnComponent` | `public SpawnComponent SpawnComponent` | 属性 |
| `GetMissionType` | `public abstract MultiplayerGameType GetMissionType();` | 方法 |
| `CheckIfOvertime` | `public virtual bool CheckIfOvertime()` | 方法 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `CheckForWarmupEnd` | `public virtual bool CheckForWarmupEnd()` | 方法 |
| `CheckForRoundEnd` | `public virtual bool CheckForRoundEnd()` | 方法 |
| `CheckForMatchEnd` | `public virtual bool CheckForMatchEnd()` | 方法 |
| `UseCultureSelection` | `public virtual bool UseCultureSelection()` | 方法 |
| `UseRoundController` | `public virtual bool UseRoundController()` | 方法 |
| `GetWinnerTeam` | `public virtual Team GetWinnerTeam()` | 方法 |
| `OnPeerChangedTeam` | `public virtual void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)` | 方法 |
| `OnClearScene` | `public override void OnClearScene()` | 方法 |
| `ClearPeerCounts` | `public void ClearPeerCounts()` | 方法 |
| `ShouldSpawnVisualsForServer` | `public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer)` | 方法 |
| `HandleAgentVisualSpawning` | `public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer, AgentBuildData spawningAgentBuildData, int troopCountInFormation = 0, bool useCosmetics = true)` | 方法 |
| `AllowCustomPlayerBanners` | `public virtual bool AllowCustomPlayerBanners()` | 方法 |
| `GetScoreForKill` | `public virtual int GetScoreForKill(Agent killedAgent)` | 方法 |
| `GetTroopNumberMultiplierForMissingPlayer` | `public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)` | 方法 |
| `GetCurrentGoldForPeer` | `public int GetCurrentGoldForPeer(MissionPeer peer)` | 方法 |
| `ChangeCurrentGoldForPeer` | `public void ChangeCurrentGoldForPeer(MissionPeer peer, int newAmount)` | 方法 |
| `HandleLateNewClientAfterLoadingFinished` | `protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `CheckIfPlayerCanDespawn` | `public virtual bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)` | 方法 |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | 方法 |
| `string>GetUsedCosmeticsFromPeer` | `public Dictionary<string, string>GetUsedCosmeticsFromPeer(MissionPeer missionPeer, BasicCharacterObject selectedTroopCharacter)` | 方法 |
| `AddCosmeticItemsToEquipment` | `public void AddCosmeticItemsToEquipment(Equipment equipment, Dictionary<string, string>choosenCosmetics)` | 方法 |
| `IsClassAvailable` | `public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)` | 方法 |
| `GoldCap` | `public const int GoldCap` | 字段 |
| `PerkTickPeriod` | `public const float PerkTickPeriod` | 字段 |
| `GameModeSystemTickPeriod` | `public const float GameModeSystemTickPeriod` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionNetwork](../MissionNetwork/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
