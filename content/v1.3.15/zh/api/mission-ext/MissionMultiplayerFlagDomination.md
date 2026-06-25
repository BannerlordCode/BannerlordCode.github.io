---
title: "MissionMultiplayerFlagDomination"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerFlagDomination`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerFlagDomination

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerFlagDomination : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs`

## 概述

`MissionMultiplayerFlagDomination` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `MoraleRounded` | `public float MoraleRounded { get; }` |
| `GameModeUsesSingleSpawning` | `public bool GameModeUsesSingleSpawning { get; }` |

## 主要方法

### UseGold
`public bool UseGold()`

**用途 / Purpose:** 处理 `use gold` 相关逻辑。

### AllowCustomPlayerBanners
`public override bool AllowCustomPlayerBanners()`

**用途 / Purpose:** 处理 `allow custom player banners` 相关逻辑。

### UseRoundController
`public override bool UseRoundController()`

**用途 / Purpose:** 处理 `use round controller` 相关逻辑。

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**用途 / Purpose:** 获取 `mission type` 的当前值。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** 当 `peer changed team` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### GetTimeUntilBattleSideVictory
`public float GetTimeUntilBattleSideVictory(BattleSideEnum side)`

**用途 / Purpose:** 获取 `time until battle side victory` 的当前值。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### CheckIfOvertime
`public override bool CheckIfOvertime()`

**用途 / Purpose:** 处理 `check if overtime` 相关逻辑。

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

**用途 / Purpose:** 处理 `check for warmup end` 相关逻辑。

### CheckForRoundEnd
`public override bool CheckForRoundEnd()`

**用途 / Purpose:** 处理 `check for round end` 相关逻辑。

### UseCultureSelection
`public override bool UseCultureSelection()`

**用途 / Purpose:** 处理 `use culture selection` 相关逻辑。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### ForfeitSpawning
`public void ForfeitSpawning(NetworkCommunicator peer)`

**用途 / Purpose:** 处理 `forfeit spawning` 相关逻辑。

### SetWinnerTeam
`public static void SetWinnerTeam(int winnerTeamNo)`

**用途 / Purpose:** 设置 `winner team` 的值或状态。

### GetNumberOfAttackersAroundFlag
`public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)`

**用途 / Purpose:** 获取 `number of attackers around flag` 的当前值。

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

**用途 / Purpose:** 获取 `flag owner team` 的当前值。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### GetTroopNumberMultiplierForMissingPlayer
`public override float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

**用途 / Purpose:** 获取 `troop number multiplier for missing player` 的当前值。

## 使用示例

```csharp
var value = new MissionMultiplayerFlagDomination();
value.UseGold();
```

## 参见

- [完整类目录](../catalog)