---
title: "MissionMultiplayerGameModeBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerGameModeBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBase : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs`

## 概述

`MissionMultiplayerGameModeBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public abstract bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public abstract bool IsGameModeUsingOpposingTeams { get; }` |
| `IsGameModeAllowChargeDamageOnFriendly` | `public virtual bool IsGameModeAllowChargeDamageOnFriendly { get; }` |
| `SpawnComponent` | `public SpawnComponent SpawnComponent { get; }` |

## 主要方法

### GetMissionType
`public abstract MultiplayerGameType GetMissionType()`

**用途 / Purpose:** 获取 `mission type` 的当前值。

### CheckIfOvertime
`public virtual bool CheckIfOvertime()`

**用途 / Purpose:** 处理 `check if overtime` 相关逻辑。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### CheckForWarmupEnd
`public virtual bool CheckForWarmupEnd()`

**用途 / Purpose:** 处理 `check for warmup end` 相关逻辑。

### CheckForRoundEnd
`public virtual bool CheckForRoundEnd()`

**用途 / Purpose:** 处理 `check for round end` 相关逻辑。

### CheckForMatchEnd
`public virtual bool CheckForMatchEnd()`

**用途 / Purpose:** 处理 `check for match end` 相关逻辑。

### UseCultureSelection
`public virtual bool UseCultureSelection()`

**用途 / Purpose:** 处理 `use culture selection` 相关逻辑。

### UseRoundController
`public virtual bool UseRoundController()`

**用途 / Purpose:** 处理 `use round controller` 相关逻辑。

### GetWinnerTeam
`public virtual Team GetWinnerTeam()`

**用途 / Purpose:** 获取 `winner team` 的当前值。

### OnPeerChangedTeam
`public virtual void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** 当 `peer changed team` 事件触发时调用此方法。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### ClearPeerCounts
`public void ClearPeerCounts()`

**用途 / Purpose:** 处理 `clear peer counts` 相关逻辑。

### ShouldSpawnVisualsForServer
`public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer)`

**用途 / Purpose:** 处理 `should spawn visuals for server` 相关逻辑。

### HandleAgentVisualSpawning
`public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer, AgentBuildData spawningAgentBuildData, int troopCountInFormation = 0, bool useCosmetics = true)`

**用途 / Purpose:** 处理 `agent visual spawning` 事件或回调。

### AllowCustomPlayerBanners
`public virtual bool AllowCustomPlayerBanners()`

**用途 / Purpose:** 处理 `allow custom player banners` 相关逻辑。

### GetScoreForKill
`public virtual int GetScoreForKill(Agent killedAgent)`

**用途 / Purpose:** 获取 `score for kill` 的当前值。

### GetTroopNumberMultiplierForMissingPlayer
`public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

**用途 / Purpose:** 获取 `troop number multiplier for missing player` 的当前值。

### GetCurrentGoldForPeer
`public int GetCurrentGoldForPeer(MissionPeer peer)`

**用途 / Purpose:** 获取 `current gold for peer` 的当前值。

### ChangeCurrentGoldForPeer
`public void ChangeCurrentGoldForPeer(MissionPeer peer, int newAmount)`

**用途 / Purpose:** 处理 `change current gold for peer` 相关逻辑。

### CheckIfPlayerCanDespawn
`public virtual bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

**用途 / Purpose:** 处理 `check if player can despawn` 相关逻辑。

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 当 `pre mission tick` 事件触发时调用此方法。

### GetUsedCosmeticsFromPeer
`public Dictionary<string, string> GetUsedCosmeticsFromPeer(MissionPeer missionPeer, BasicCharacterObject selectedTroopCharacter)`

**用途 / Purpose:** 获取 `used cosmetics from peer` 的当前值。

### AddCosmeticItemsToEquipment
`public void AddCosmeticItemsToEquipment(Equipment equipment, Dictionary<string, string> choosenCosmetics)`

**用途 / Purpose:** 向当前集合/状态中添加 `cosmetic items to equipment`。

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

**用途 / Purpose:** 处理 `is class available` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMissionMultiplayerGameModeBase();
```

## 参见

- [完整类目录](../catalog)