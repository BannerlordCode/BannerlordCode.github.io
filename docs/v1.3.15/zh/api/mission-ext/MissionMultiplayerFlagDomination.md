<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerFlagDomination`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerFlagDomination

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMultiplayerFlagDomination` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public bool UseGold()
```

### AllowCustomPlayerBanners

```csharp
public override bool AllowCustomPlayerBanners()
```

### UseRoundController

```csharp
public override bool UseRoundController()
```

### GetMissionType

```csharp
public override MultiplayerGameType GetMissionType()
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### AfterStart

```csharp
public override void AfterStart()
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### OnPeerChangedTeam

```csharp
public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### GetTimeUntilBattleSideVictory

```csharp
public float GetTimeUntilBattleSideVictory(BattleSideEnum side)
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### CheckIfOvertime

```csharp
public override bool CheckIfOvertime()
```

### CheckForWarmupEnd

```csharp
public override bool CheckForWarmupEnd()
```

### CheckForRoundEnd

```csharp
public override bool CheckForRoundEnd()
```

### UseCultureSelection

```csharp
public override bool UseCultureSelection()
```

### OnAgentBuild

```csharp
public override void OnAgentBuild(Agent agent, Banner banner)
```

### ForfeitSpawning

```csharp
public void ForfeitSpawning(NetworkCommunicator peer)
```

### SetWinnerTeam

```csharp
public static void SetWinnerTeam(int winnerTeamNo)
```

### GetNumberOfAttackersAroundFlag

```csharp
public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)
```

### GetFlagOwnerTeam

```csharp
public Team GetFlagOwnerTeam(FlagCapturePoint flag)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)