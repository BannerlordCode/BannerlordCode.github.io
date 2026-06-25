---
title: "MissionMultiplayerGameModeBase"
description: "MissionMultiplayerGameModeBase 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mission type 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetMissionType();
```

### CheckIfOvertime
`public virtual bool CheckIfOvertime()`

**用途 / Purpose:** **用途 / Purpose:** 检查if overtime在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckIfOvertime();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnMissionTick(0);
```

### CheckForWarmupEnd
`public virtual bool CheckForWarmupEnd()`

**用途 / Purpose:** **用途 / Purpose:** 检查for warmup end在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckForWarmupEnd();
```

### CheckForRoundEnd
`public virtual bool CheckForRoundEnd()`

**用途 / Purpose:** **用途 / Purpose:** 检查for round end在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckForRoundEnd();
```

### CheckForMatchEnd
`public virtual bool CheckForMatchEnd()`

**用途 / Purpose:** **用途 / Purpose:** 检查for match end在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckForMatchEnd();
```

### UseCultureSelection
`public virtual bool UseCultureSelection()`

**用途 / Purpose:** **用途 / Purpose:** 调用 UseCultureSelection 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.UseCultureSelection();
```

### UseRoundController
`public virtual bool UseRoundController()`

**用途 / Purpose:** **用途 / Purpose:** 调用 UseRoundController 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.UseRoundController();
```

### GetWinnerTeam
`public virtual Team GetWinnerTeam()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 winner team 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetWinnerTeam();
```

### OnPeerChangedTeam
`public virtual void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** **用途 / Purpose:** 在 peer changed team 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnPeerChangedTeam(peer, oldTeam, newTeam);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** **用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnClearScene();
```

### ClearPeerCounts
`public void ClearPeerCounts()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的peer counts。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.ClearPeerCounts();
```

### ShouldSpawnVisualsForServer
`public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldSpawnVisualsForServer 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.ShouldSpawnVisualsForServer(spawningNetworkPeer);
```

### HandleAgentVisualSpawning
`public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer, AgentBuildData spawningAgentBuildData, int troopCountInFormation = 0, bool useCosmetics = true)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 agent visual spawning 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.HandleAgentVisualSpawning(spawningNetworkPeer, spawningAgentBuildData, 0, false);
```

### AllowCustomPlayerBanners
`public virtual bool AllowCustomPlayerBanners()`

**用途 / Purpose:** **用途 / Purpose:** 允许当前对象启用或执行custom player banners。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.AllowCustomPlayerBanners();
```

### GetScoreForKill
`public virtual int GetScoreForKill(Agent killedAgent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 score for kill 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetScoreForKill(killedAgent);
```

### GetTroopNumberMultiplierForMissingPlayer
`public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troop number multiplier for missing player 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetTroopNumberMultiplierForMissingPlayer(spawningPeer);
```

### GetCurrentGoldForPeer
`public int GetCurrentGoldForPeer(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 current gold for peer 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetCurrentGoldForPeer(peer);
```

### ChangeCurrentGoldForPeer
`public void ChangeCurrentGoldForPeer(MissionPeer peer, int newAmount)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeCurrentGoldForPeer 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.ChangeCurrentGoldForPeer(peer, 0);
```

### CheckIfPlayerCanDespawn
`public virtual bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

**用途 / Purpose:** **用途 / Purpose:** 检查if player can despawn在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckIfPlayerCanDespawn(missionPeer);
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 pre mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnPreMissionTick(0);
```

### GetUsedCosmeticsFromPeer
`public Dictionary<string, string> GetUsedCosmeticsFromPeer(MissionPeer missionPeer, BasicCharacterObject selectedTroopCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 used cosmetics from peer 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetUsedCosmeticsFromPeer(missionPeer, selectedTroopCharacter);
```

### AddCosmeticItemsToEquipment
`public void AddCosmeticItemsToEquipment(Equipment equipment, Dictionary<string, string> choosenCosmetics)`

**用途 / Purpose:** **用途 / Purpose:** 将 cosmetic items to equipment 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.AddCosmeticItemsToEquipment(equipment, dictionary<string, "example");
```

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 class available 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeBase 实例
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.IsClassAvailable(heroClass);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionMultiplayerGameModeBase instance = ...;
```

## 参见

- [本区域目录](../)