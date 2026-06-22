<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerGameModeBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeBase

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMultiplayerGameModeBase` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public abstract bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public abstract bool IsGameModeUsingOpposingTeams { get; }` |
| `IsGameModeAllowChargeDamageOnFriendly` | `public virtual bool IsGameModeAllowChargeDamageOnFriendly { get; }` |
| `SpawnComponent` | `public SpawnComponent SpawnComponent { get; }` |


## 主要方法

### GetMissionType

```csharp
public abstract MultiplayerGameType GetMissionType()
```

### CheckIfOvertime

```csharp
public virtual bool CheckIfOvertime()
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### CheckForWarmupEnd

```csharp
public virtual bool CheckForWarmupEnd()
```

### CheckForRoundEnd

```csharp
public virtual bool CheckForRoundEnd()
```

### CheckForMatchEnd

```csharp
public virtual bool CheckForMatchEnd()
```

### UseCultureSelection

```csharp
public virtual bool UseCultureSelection()
```

### UseRoundController

```csharp
public virtual bool UseRoundController()
```

### GetWinnerTeam

```csharp
public virtual Team GetWinnerTeam()
```

### OnPeerChangedTeam

```csharp
public virtual void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)
```

### OnClearScene

```csharp
public override void OnClearScene()
```

### ClearPeerCounts

```csharp
public void ClearPeerCounts()
```

### ShouldSpawnVisualsForServer

```csharp
public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer)
```

### HandleAgentVisualSpawning

```csharp
public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer, AgentBuildData spawningAgentBuildData, int troopCountInFormation = 0, bool useCosmetics = true)
```

### AllowCustomPlayerBanners

```csharp
public virtual bool AllowCustomPlayerBanners()
```

### GetScoreForKill

```csharp
public virtual int GetScoreForKill(Agent killedAgent)
```

### GetTroopNumberMultiplierForMissingPlayer

```csharp
public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)
```

### GetCurrentGoldForPeer

```csharp
public int GetCurrentGoldForPeer(MissionPeer peer)
```

### ChangeCurrentGoldForPeer

```csharp
public void ChangeCurrentGoldForPeer(MissionPeer peer, int newAmount)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)