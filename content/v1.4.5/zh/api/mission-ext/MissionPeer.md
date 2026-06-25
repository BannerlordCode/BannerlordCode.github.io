---
title: "MissionPeer"
description: "MissionPeer 的自动生成类参考。"
---
# MissionPeer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPeer : PeerComponent`
**Base:** `PeerComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionPeer.cs`

## 概述

`MissionPeer` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `Score` | `public int Score { get; set; }` |
| `BotsUnderControlAlive` | `public int BotsUnderControlAlive { get; set; }` |
| `BotsUnderControlTotal` | `public int BotsUnderControlTotal { get; set; }` |
| `IsControlledAgentActive` | `public bool IsControlledAgentActive { get; }` |
| `ControlledAgent` | `public Agent ControlledAgent { get; set; }` |
| `FollowedAgent` | `public Agent FollowedAgent { get; set; }` |
| `Team` | `public Team Team { get; set; }` |
| `Culture` | `public BasicCultureObject Culture { get; set; }` |
| `ControlledFormation` | `public Formation ControlledFormation { get; set; }` |
| `IsAgentAliveForChatting` | `public bool IsAgentAliveForChatting { get; }` |
| `IsMutedFromPlatform` | `public bool IsMutedFromPlatform { get; }` |
| `IsMuted` | `public bool IsMuted { get; }` |
| `IsMutedFromGameOrPlatform` | `public bool IsMutedFromGameOrPlatform { get; }` |

## 主要方法

### OnUpdateEquipmentSetIndexEventDelegate
`public delegate void OnUpdateEquipmentSetIndexEventDelegate(MissionPeer lobbyPeer, int equipmentSetIndex)`

**用途 / Purpose:** 在 「update equipment set index event delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnUpdateEquipmentSetIndexEventDelegate(lobbyPeer, 0);
```

### OnPerkUpdateEventDelegate
`public delegate void OnPerkUpdateEventDelegate(MissionPeer peer)`

**用途 / Purpose:** 在 「perk update event delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnPerkUpdateEventDelegate(peer);
```

### OnTeamChangedDelegate
`public delegate void OnTeamChangedDelegate(NetworkCommunicator peer, Team previousTeam, Team newTeam)`

**用途 / Purpose:** 在 「team changed delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnTeamChangedDelegate(peer, previousTeam, newTeam);
```

### OnCultureChangedDelegate
`public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture)`

**用途 / Purpose:** 在 「culture changed delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnCultureChangedDelegate(newCulture);
```

### OnPlayerKilledDelegate
`public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer, MissionPeer killedPeer)`

**用途 / Purpose:** 在 「player killed delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnPlayerKilledDelegate(killerPeer, killedPeer);
```

### SetMutedFromPlatform
`public void SetMutedFromPlatform(bool isMuted)`

**用途 / Purpose:** 为 「muted from platform」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.SetMutedFromPlatform(false);
```

### SetMuted
`public void SetMuted(bool isMuted)`

**用途 / Purpose:** 为 「muted」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.SetMuted(false);
```

### ResetRequestedKickPollCount
`public void ResetRequestedKickPollCount()`

**用途 / Purpose:** 将 「requested kick poll count」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.ResetRequestedKickPollCount();
```

### IncrementRequestedKickPollCount
`public void IncrementRequestedKickPollCount()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.IncrementRequestedKickPollCount();
```

### GetSelectedPerkIndexWithPerkListIndex
`public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex, int perkListIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「selected perk index with perk list index」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.GetSelectedPerkIndexWithPerkListIndex(0, 0);
```

### SelectPerk
`public bool SelectPerk(int perkListIndex, int perkIndex, int enforcedSelectedTroopIndex = -1)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.SelectPerk(0, 0, 0);
```

### HandleVoteChange
`public void HandleVoteChange(CultureVoteTypes voteType, BasicCultureObject culture)`

**用途 / Purpose:** 执行与 「vote change」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.HandleVoteChange(voteType, culture);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnFinalize();
```

### OnInitialize
`public override void OnInitialize()`

**用途 / Purpose:** 在 「initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnInitialize();
```

### GetAmountOfAgentVisualsForPeer
`public int GetAmountOfAgentVisualsForPeer()`

**用途 / Purpose:** 读取并返回当前对象中 「amount of agent visuals for peer」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.GetAmountOfAgentVisualsForPeer();
```

### GetVisuals
`public PeerVisualsHolder GetVisuals(int visualIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「visuals」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.GetVisuals(0);
```

### ClearVisuals
`public void ClearVisuals(int visualIndex)`

**用途 / Purpose:** 清空当前对象中的「visuals」。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.ClearVisuals(0);
```

### ClearAllVisuals
`public void ClearAllVisuals(bool freeResources = false)`

**用途 / Purpose:** 清空当前对象中的「all visuals」。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.ClearAllVisuals(false);
```

### OnVisualsSpawned
`public void OnVisualsSpawned(PeerVisualsHolder visualsHolder, int visualIndex)`

**用途 / Purpose:** 在 「visuals spawned」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnVisualsSpawned(visualsHolder, 0);
```

### GetAllAgentVisualsForPeer
`public IEnumerable<IAgentVisual> GetAllAgentVisualsForPeer()`

**用途 / Purpose:** 读取并返回当前对象中 「all agent visuals for peer」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.GetAllAgentVisualsForPeer();
```

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「agent visual for peer」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.GetAgentVisualForPeer(0);
```

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex, out IAgentVisual mountAgentVisuals)`

**用途 / Purpose:** 读取并返回当前对象中 「agent visual for peer」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.GetAgentVisualForPeer(0, mountAgentVisuals);
```

### TickInactivityStatus
`public void TickInactivityStatus()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「inactivity status」的状态。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.TickInactivityStatus();
```

### OnKillAnotherPeer
`public void OnKillAnotherPeer(MissionPeer victimPeer)`

**用途 / Purpose:** 在 「kill another peer」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnKillAnotherPeer(victimPeer);
```

### OverrideCultureWithTeamCulture
`public void OverrideCultureWithTeamCulture()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OverrideCultureWithTeamCulture();
```

### GetNumberOfTimesPeerKilledPeer
`public int GetNumberOfTimesPeerKilledPeer(MissionPeer killedPeer)`

**用途 / Purpose:** 读取并返回当前对象中 「number of times peer killed peer」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.GetNumberOfTimesPeerKilledPeer(killedPeer);
```

### ResetKillRegistry
`public void ResetKillRegistry()`

**用途 / Purpose:** 将 「kill registry」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.ResetKillRegistry();
```

### RefreshSelectedPerks
`public bool RefreshSelectedPerks()`

**用途 / Purpose:** 使 「selected perks」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
var result = missionPeer.RefreshSelectedPerks();
```

### OnTeamInitialPerkInfoReceived
`public void OnTeamInitialPerkInfoReceived(int perks)`

**用途 / Purpose:** 在 「team initial perk info received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionPeer 实例
MissionPeer missionPeer = ...;
missionPeer.OnTeamInitialPerkInfoReceived(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionPeer missionPeer = ...;
missionPeer.OnUpdateEquipmentSetIndexEventDelegate(lobbyPeer, 0);
```

## 参见

- [本区域目录](../)