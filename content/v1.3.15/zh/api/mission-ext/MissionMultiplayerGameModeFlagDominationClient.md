---
title: "MissionMultiplayerGameModeFlagDominationClient"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerGameModeFlagDominationClient`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeFlagDominationClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs`

## 概述

`MissionMultiplayerGameModeFlagDominationClient` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `IsGameModeUsingCasualGold` | `public override bool IsGameModeUsingCasualGold { get; }` |
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnPreparationEnded
`public void OnPreparationEnded()`

**用途 / Purpose:** 当 `preparation ended` 事件触发时调用此方法。

### GetMissionCameraLockMode
`public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**用途 / Purpose:** 获取 `mission camera lock mode` 的当前值。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

**用途 / Purpose:** 获取 `flag owner` 的当前值。

### OnTeamPowerChanged
`public void OnTeamPowerChanged(BattleSideEnum teamSide, float power)`

**用途 / Purpose:** 当 `team power changed` 事件触发时调用此方法。

### OnMoraleChanged
`public void OnMoraleChanged(float morale)`

**用途 / Purpose:** 当 `morale changed` 事件触发时调用此方法。

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**用途 / Purpose:** 当 `gold amount changed for representative` 事件触发时调用此方法。

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

**用途 / Purpose:** 当 `number of flags changed` 事件触发时调用此方法。

### OnBotsControlledChanged
`public void OnBotsControlledChanged(MissionPeer missionPeer, int botAliveCount, int botTotalCount)`

**用途 / Purpose:** 当 `bots controlled changed` 事件触发时调用此方法。

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)`

**用途 / Purpose:** 当 `capture point owner changed` 事件触发时调用此方法。

### OnRequestForfeitSpawn
`public void OnRequestForfeitSpawn()`

**用途 / Purpose:** 当 `request forfeit spawn` 事件触发时调用此方法。

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

**用途 / Purpose:** 获取 `compass targets` 的当前值。

### GetGoldAmount
`public override int GetGoldAmount()`

**用途 / Purpose:** 获取 `gold amount` 的当前值。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionMultiplayerGameModeFlagDominationClient();
value.OnBehaviorInitialize();
```

## 参见

- [完整类目录](../catalog)