<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerGameModeBaseClient`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeBaseClient

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMultiplayerGameModeBaseClient` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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
| `IsGameModeUsingCasualGold` | `public virtual bool IsGameModeUsingCasualGold { get; }` |
| `IsGameModeUsingRoundCountdown` | `public abstract bool IsGameModeUsingRoundCountdown { get; }` |
| `IsGameModeUsingAllowCultureChange` | `public virtual bool IsGameModeUsingAllowCultureChange { get; }` |
| `IsGameModeUsingAllowTroopChange` | `public virtual bool IsGameModeUsingAllowTroopChange { get; }` |
| `GameType` | `public abstract MultiplayerGameType GameType { get; }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get; }` |
| `IsInWarmup` | `public bool IsInWarmup { get; }` |
| `RemainingTime` | `public float RemainingTime { get; }` |


## 主要方法

### GetGoldAmount

```csharp
public abstract int GetGoldAmount()
```

### GetMissionCameraLockMode

```csharp
public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### EarlyStart

```csharp
public override void EarlyStart()
```

### CheckTimer

```csharp
public bool CheckTimer(out int remainingTime, out int remainingWarningTime, bool forceUpdate = false)
```

### OnGoldAmountChangedForRepresentative

```csharp
public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)
```

### CanRequestTroopChange

```csharp
public virtual bool CanRequestTroopChange()
```

### CanRequestCultureChange

```csharp
public virtual bool CanRequestCultureChange()
```

### IsClassAvailable

```csharp
public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)