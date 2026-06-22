<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionPeer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionPeer

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionPeer` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `JoinTime` | `public DateTime JoinTime { get; }` |
| `EquipmentUpdatingExpired` | `public bool EquipmentUpdatingExpired { get; }` |
| `TeamInitialPerkInfoReady` | `public bool TeamInitialPerkInfoReady { get; }` |
| `HasSpawnedAgentVisuals` | `public bool HasSpawnedAgentVisuals { get; set; }` |
| `SelectedTroopIndex` | `public int SelectedTroopIndex { get; set; }` |
| `NextSelectedTroopIndex` | `public int NextSelectedTroopIndex { get; set; }` |
| `Representative` | `public MissionRepresentativeBase Representative { get; }` |
| `Perks` | `public MBReadOnlyList<int > Perks { get; }` |
| `DisplayedName` | `public string DisplayedName { get; }` |
| `SelectedPerks` | `public MBReadOnlyList<MPPerkObject> SelectedPerks { get; }` |
| `SpawnTimer` | `public Timer SpawnTimer { get; }` |
| `HasSpawnTimerExpired` | `public bool HasSpawnTimerExpired { get; }` |
| `VotedForBan` | `public BasicCultureObject VotedForBan { get; }` |
| `VotedForSelection` | `public BasicCultureObject VotedForSelection { get; }` |
| `WantsToSpawnAsBot` | `public bool WantsToSpawnAsBot { get; }` |
| `SpawnCountThisRound` | `public int SpawnCountThisRound { get; }` |
| `RequestedKickPollCount` | `public int RequestedKickPollCount { get; }` |
| `KillCount` | `public int KillCount { get; set; }` |
| `AssistCount` | `public int AssistCount { get; set; }` |
| `DeathCount` | `public int DeathCount { get; set; }` |


## 主要方法

### SetMutedFromPlatform

```csharp
public void SetMutedFromPlatform(bool isMuted)
```

### SetMuted

```csharp
public void SetMuted(bool isMuted)
```

### ResetRequestedKickPollCount

```csharp
public void ResetRequestedKickPollCount()
```

### IncrementRequestedKickPollCount

```csharp
public void IncrementRequestedKickPollCount()
```

### GetSelectedPerkIndexWithPerkListIndex

```csharp
public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex, int perkListIndex)
```

### SelectPerk

```csharp
public bool SelectPerk(int perkListIndex, int perkIndex, int enforcedSelectedTroopIndex = -1)
```

### HandleVoteChange

```csharp
public void HandleVoteChange(CultureVoteTypes voteType, BasicCultureObject culture)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnInitialize

```csharp
public override void OnInitialize()
```

### GetAmountOfAgentVisualsForPeer

```csharp
public int GetAmountOfAgentVisualsForPeer()
```

### GetVisuals

```csharp
public PeerVisualsHolder GetVisuals(int visualIndex)
```

### ClearVisuals

```csharp
public void ClearVisuals(int visualIndex)
```

### ClearAllVisuals

```csharp
public void ClearAllVisuals(bool freeResources = false)
```

### OnVisualsSpawned

```csharp
public void OnVisualsSpawned(PeerVisualsHolder visualsHolder, int visualIndex)
```

### GetAllAgentVisualsForPeer

```csharp
public IEnumerable<IAgentVisual> GetAllAgentVisualsForPeer()
```

### GetAgentVisualForPeer

```csharp
public IAgentVisual GetAgentVisualForPeer(int visualsIndex)
```

### GetAgentVisualForPeer

```csharp
public IAgentVisual GetAgentVisualForPeer(int visualsIndex, out IAgentVisual mountAgentVisuals)
```

### TickInactivityStatus

```csharp
public void TickInactivityStatus()
```

### OnKillAnotherPeer

```csharp
public void OnKillAnotherPeer(MissionPeer victimPeer)
```

### OverrideCultureWithTeamCulture

```csharp
public void OverrideCultureWithTeamCulture()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)