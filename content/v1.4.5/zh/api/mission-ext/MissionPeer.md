---
title: "MissionPeer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionPeer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionPeer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPeer : PeerComponent`
**Base:** `PeerComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionPeer.cs`

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

**用途 / Purpose:** 当 `update equipment set index event delegate` 事件触发时调用此方法。

### OnPerkUpdateEventDelegate
`public delegate void OnPerkUpdateEventDelegate(MissionPeer peer)`

**用途 / Purpose:** 当 `perk update event delegate` 事件触发时调用此方法。

### OnTeamChangedDelegate
`public delegate void OnTeamChangedDelegate(NetworkCommunicator peer, Team previousTeam, Team newTeam)`

**用途 / Purpose:** 当 `team changed delegate` 事件触发时调用此方法。

### OnCultureChangedDelegate
`public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture)`

**用途 / Purpose:** 当 `culture changed delegate` 事件触发时调用此方法。

### OnPlayerKilledDelegate
`public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer, MissionPeer killedPeer)`

**用途 / Purpose:** 当 `player killed delegate` 事件触发时调用此方法。

### SetMutedFromPlatform
`public void SetMutedFromPlatform(bool isMuted)`

**用途 / Purpose:** 设置 `muted from platform` 的值或状态。

### SetMuted
`public void SetMuted(bool isMuted)`

**用途 / Purpose:** 设置 `muted` 的值或状态。

### ResetRequestedKickPollCount
`public void ResetRequestedKickPollCount()`

**用途 / Purpose:** 将 `requested kick poll count` 重置为初始状态。

### IncrementRequestedKickPollCount
`public void IncrementRequestedKickPollCount()`

**用途 / Purpose:** 处理 `increment requested kick poll count` 相关逻辑。

### GetSelectedPerkIndexWithPerkListIndex
`public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex, int perkListIndex)`

**用途 / Purpose:** 获取 `selected perk index with perk list index` 的当前值。

### SelectPerk
`public bool SelectPerk(int perkListIndex, int perkIndex, int enforcedSelectedTroopIndex = -1)`

**用途 / Purpose:** 处理 `select perk` 相关逻辑。

### HandleVoteChange
`public void HandleVoteChange(CultureVoteTypes voteType, BasicCultureObject culture)`

**用途 / Purpose:** 处理 `vote change` 事件或回调。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnInitialize
`public override void OnInitialize()`

**用途 / Purpose:** 当 `initialize` 事件触发时调用此方法。

### GetAmountOfAgentVisualsForPeer
`public int GetAmountOfAgentVisualsForPeer()`

**用途 / Purpose:** 获取 `amount of agent visuals for peer` 的当前值。

### GetVisuals
`public PeerVisualsHolder GetVisuals(int visualIndex)`

**用途 / Purpose:** 获取 `visuals` 的当前值。

### ClearVisuals
`public void ClearVisuals(int visualIndex)`

**用途 / Purpose:** 处理 `clear visuals` 相关逻辑。

### ClearAllVisuals
`public void ClearAllVisuals(bool freeResources = false)`

**用途 / Purpose:** 处理 `clear all visuals` 相关逻辑。

### OnVisualsSpawned
`public void OnVisualsSpawned(PeerVisualsHolder visualsHolder, int visualIndex)`

**用途 / Purpose:** 当 `visuals spawned` 事件触发时调用此方法。

### GetAllAgentVisualsForPeer
`public IEnumerable<IAgentVisual> GetAllAgentVisualsForPeer()`

**用途 / Purpose:** 获取 `all agent visuals for peer` 的当前值。

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex)`

**用途 / Purpose:** 获取 `agent visual for peer` 的当前值。

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex, out IAgentVisual mountAgentVisuals)`

**用途 / Purpose:** 获取 `agent visual for peer` 的当前值。

### TickInactivityStatus
`public void TickInactivityStatus()`

**用途 / Purpose:** 处理 `tick inactivity status` 相关逻辑。

### OnKillAnotherPeer
`public void OnKillAnotherPeer(MissionPeer victimPeer)`

**用途 / Purpose:** 当 `kill another peer` 事件触发时调用此方法。

### OverrideCultureWithTeamCulture
`public void OverrideCultureWithTeamCulture()`

**用途 / Purpose:** 处理 `override culture with team culture` 相关逻辑。

### GetNumberOfTimesPeerKilledPeer
`public int GetNumberOfTimesPeerKilledPeer(MissionPeer killedPeer)`

**用途 / Purpose:** 获取 `number of times peer killed peer` 的当前值。

### ResetKillRegistry
`public void ResetKillRegistry()`

**用途 / Purpose:** 将 `kill registry` 重置为初始状态。

### RefreshSelectedPerks
`public bool RefreshSelectedPerks()`

**用途 / Purpose:** 刷新 `selected perks` 的显示或缓存。

### OnTeamInitialPerkInfoReceived
`public void OnTeamInitialPerkInfoReceived(int perks)`

**用途 / Purpose:** 当 `team initial perk info received` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionPeer();
value.OnUpdateEquipmentSetIndexEventDelegate(lobbyPeer, 0);
```

## 参见

- [完整类目录](../catalog)