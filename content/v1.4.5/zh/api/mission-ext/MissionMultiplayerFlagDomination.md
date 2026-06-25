---
title: "MissionMultiplayerFlagDomination"
description: "MissionMultiplayerFlagDomination 的自动生成类参考。"
---
# MissionMultiplayerFlagDomination

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerFlagDomination : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs`

## 概述

`MissionMultiplayerFlagDomination` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `GameModeUsesSingleSpawning` | `public bool GameModeUsesSingleSpawning { get; }` |

## 主要方法

### UseGold
`public bool UseGold()`

**用途 / Purpose:** 调用 UseGold 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.UseGold();
```

### AllowCustomPlayerBanners
`public override bool AllowCustomPlayerBanners()`

**用途 / Purpose:** 允许当前对象启用或执行custom player banners。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.AllowCustomPlayerBanners();
```

### UseRoundController
`public override bool UseRoundController()`

**用途 / Purpose:** 调用 UseRoundController 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.UseRoundController();
```

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**用途 / Purpose:** 读取并返回当前对象中 mission type 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetMissionType();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnRemoveBehavior();
```

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** 在 peer changed team 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnPeerChangedTeam(peer, oldTeam, newTeam);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnMissionTick(0);
```

### GetTimeUntilBattleSideVictory
`public float GetTimeUntilBattleSideVictory(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 time until battle side victory 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetTimeUntilBattleSideVictory(side);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnClearScene();
```

### CheckIfOvertime
`public override bool CheckIfOvertime()`

**用途 / Purpose:** 检查if overtime在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.CheckIfOvertime();
```

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

**用途 / Purpose:** 检查for warmup end在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.CheckForWarmupEnd();
```

### CheckForRoundEnd
`public override bool CheckForRoundEnd()`

**用途 / Purpose:** 检查for round end在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.CheckForRoundEnd();
```

### UseCultureSelection
`public override bool UseCultureSelection()`

**用途 / Purpose:** 调用 UseCultureSelection 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.UseCultureSelection();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnAgentBuild(agent, banner);
```

### ForfeitSpawning
`public void ForfeitSpawning(NetworkCommunicator peer)`

**用途 / Purpose:** 调用 ForfeitSpawning 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.ForfeitSpawning(peer);
```

### SetWinnerTeam
`public static void SetWinnerTeam(int winnerTeamNo)`

**用途 / Purpose:** 为 winner team 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MissionMultiplayerFlagDomination.SetWinnerTeam(0);
```

### GetNumberOfAttackersAroundFlag
`public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)`

**用途 / Purpose:** 读取并返回当前对象中 number of attackers around flag 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetNumberOfAttackersAroundFlag(capturePoint);
```

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

**用途 / Purpose:** 读取并返回当前对象中 flag owner team 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetFlagOwnerTeam(flag);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### GetTroopNumberMultiplierForMissingPlayer
`public override float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

**用途 / Purpose:** 读取并返回当前对象中 troop number multiplier for missing player 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerFlagDomination 实例
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
var result = missionMultiplayerFlagDomination.GetTroopNumberMultiplierForMissingPlayer(spawningPeer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMultiplayerFlagDomination missionMultiplayerFlagDomination = ...;
missionMultiplayerFlagDomination.UseGold();
```

## 参见

- [本区域目录](../)