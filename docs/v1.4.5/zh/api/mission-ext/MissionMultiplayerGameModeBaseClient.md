<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerGameModeBaseClient`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeBaseClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBaseClient : MissionNetwork, ICameraModeLogic`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs`

## 概述

`MissionMultiplayerGameModeBaseClient` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MissionLobbyComponent` | `public MissionLobbyComponent MissionLobbyComponent { get; }` |
| `MissionNetworkComponent` | `public MissionNetworkComponent MissionNetworkComponent { get; }` |
| `ScoreboardComponent` | `public MissionScoreboardComponent ScoreboardComponent { get; }` |
| `NotificationsComponent` | `public MultiplayerGameNotificationsComponent NotificationsComponent { get; }` |
| `WarmupComponent` | `public MultiplayerWarmupComponent WarmupComponent { get; }` |
| `RoundComponent` | `public IRoundComponent RoundComponent { get; }` |
| `TimerComponent` | `public MultiplayerTimerComponent TimerComponent { get; }` |
| `IsGameModeUsingGold` | `public abstract bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public abstract bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public abstract bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public abstract MultiplayerGameType GameType { get; }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get; }` |

## 主要方法

### GetGoldAmount
`public abstract int GetGoldAmount()`

**用途 / Purpose:** 获取 `gold amount` 的当前值。

### GetMissionCameraLockMode
`public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**用途 / Purpose:** 获取 `mission camera lock mode` 的当前值。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### CheckTimer
`public bool CheckTimer(out int remainingTime, out int remainingWarningTime, bool forceUpdate = false)`

**用途 / Purpose:** 处理 `check timer` 相关逻辑。

### OnGoldAmountChangedForRepresentative
`public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**用途 / Purpose:** 当 `gold amount changed for representative` 事件触发时调用此方法。

### CanRequestTroopChange
`public virtual bool CanRequestTroopChange()`

**用途 / Purpose:** 判断当前对象是否可以执行 `request troop change`。

### CanRequestCultureChange
`public virtual bool CanRequestCultureChange()`

**用途 / Purpose:** 判断当前对象是否可以执行 `request culture change`。

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

**用途 / Purpose:** 处理 `is class available` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMissionMultiplayerGameModeBaseClient();
```

## 参见

- [完整类目录](../catalog)