---
title: "MissionPeer"
description: "MissionPeer：TaleWorlds.MountAndBlade 的 public 类，继承 PeerComponent；公开成员 81 个（方法 29、属性 33、字段 8）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionPeer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionPeer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionPeer : PeerComponent`
**File:** `TaleWorlds.MountAndBlade/MissionPeer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionPeer 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionPeer.cs。它是一个 public 类，实现/继承 PeerComponent，继承链为 MissionPeer → PeerComponent → IEntityComponent。public/protected 成员共 81 个：29 方法、33 属性、8 字段、5 事件、1 构造函数、5 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionPeer 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionPeer → PeerComponent → IEntityComponent。成员构成以属性为主（属性 33/81，方法 29/81），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionPeer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEquipmentIndexRefreshed;` | `public static event MissionPeer.OnUpdateEquipmentSetIndexEventDelegate OnEquipmentIndexRefreshed;` | 事件 |
| `OnPerkSelectionUpdated;` | `public static event MissionPeer.OnPerkUpdateEventDelegate OnPerkSelectionUpdated;` | 事件 |
| `OnPreTeamChanged;` | `public static event MissionPeer.OnTeamChangedDelegate OnPreTeamChanged;` | 事件 |
| `OnTeamChanged;` | `public static event MissionPeer.OnTeamChangedDelegate OnTeamChanged;` | 事件 |
| `OnPlayerKilled;` | `public static event MissionPeer.OnPlayerKilledDelegate OnPlayerKilled;` | 事件 |
| `JoinTime` | `public DateTime JoinTime` | 属性 |
| `EquipmentUpdatingExpired` | `public bool EquipmentUpdatingExpired` | 属性 |
| `TeamInitialPerkInfoReady` | `public bool TeamInitialPerkInfoReady` | 属性 |
| `HasSpawnedAgentVisuals` | `public bool HasSpawnedAgentVisuals` | 属性 |
| `SelectedTroopIndex` | `public int SelectedTroopIndex` | 属性 |
| `NextSelectedTroopIndex` | `public int NextSelectedTroopIndex` | 属性 |
| `Representative` | `public MissionRepresentativeBase Representative` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<int[]>Perks` | 属性 |
| `DisplayedName` | `public string DisplayedName` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<MPPerkObject>SelectedPerks` | 属性 |
| `MissionPeer` | `public MissionPeer()` | 构造函数 |
| `SpawnTimer` | `public Timer SpawnTimer` | 属性 |
| `HasSpawnTimerExpired` | `public bool HasSpawnTimerExpired` | 属性 |
| `VotedForBan` | `public BasicCultureObject VotedForBan` | 属性 |
| `VotedForSelection` | `public BasicCultureObject VotedForSelection` | 属性 |
| `WantsToSpawnAsBot` | `public bool WantsToSpawnAsBot` | 属性 |
| `SpawnCountThisRound` | `public int SpawnCountThisRound` | 属性 |
| `RequestedKickPollCount` | `public int RequestedKickPollCount` | 属性 |
| `KillCount` | `public int KillCount` | 属性 |
| `AssistCount` | `public int AssistCount` | 属性 |
| `DeathCount` | `public int DeathCount` | 属性 |
| `Score` | `public int Score` | 属性 |
| `BotsUnderControlAlive` | `public int BotsUnderControlAlive` | 属性 |
| `BotsUnderControlTotal` | `public int BotsUnderControlTotal` | 属性 |
| `IsControlledAgentActive` | `public bool IsControlledAgentActive` | 属性 |
| `ControlledAgent` | `public Agent ControlledAgent` | 属性 |
| `FollowedAgent` | `public Agent FollowedAgent` | 属性 |
| `Team` | `public Team Team` | 属性 |
| `Culture` | `public BasicCultureObject Culture` | 属性 |
| `ControlledFormation` | `public Formation ControlledFormation` | 属性 |
| `IsAgentAliveForChatting` | `public bool IsAgentAliveForChatting` | 属性 |
| `IsMutedFromPlatform` | `public bool IsMutedFromPlatform` | 属性 |
| `IsMuted` | `public bool IsMuted` | 属性 |
| `IsMutedFromGameOrPlatform` | `public bool IsMutedFromGameOrPlatform` | 属性 |
| `SetMutedFromPlatform` | `public void SetMutedFromPlatform(bool isMuted)` | 方法 |
| `SetMuted` | `public void SetMuted(bool isMuted)` | 方法 |
| `ResetRequestedKickPollCount` | `public void ResetRequestedKickPollCount()` | 方法 |
| `IncrementRequestedKickPollCount` | `public void IncrementRequestedKickPollCount()` | 方法 |
| `GetSelectedPerkIndexWithPerkListIndex` | `public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex, int perkListIndex)` | 方法 |
| `SelectPerk` | `public bool SelectPerk(int perkListIndex, int perkIndex, int enforcedSelectedTroopIndex = -1)` | 方法 |
| `HandleVoteChange` | `public void HandleVoteChange(CultureVoteTypes voteType, BasicCultureObject culture)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnInitialize` | `public override void OnInitialize()` | 方法 |
| `GetAmountOfAgentVisualsForPeer` | `public int GetAmountOfAgentVisualsForPeer()` | 方法 |
| `GetVisuals` | `public PeerVisualsHolder GetVisuals(int visualIndex)` | 方法 |
| `ClearVisuals` | `public void ClearVisuals(int visualIndex)` | 方法 |
| `ClearAllVisuals` | `public void ClearAllVisuals(bool freeResources = false)` | 方法 |
| `OnVisualsSpawned` | `public void OnVisualsSpawned(PeerVisualsHolder visualsHolder, int visualIndex)` | 方法 |
| `IEnumerable` | `public IEnumerable<IAgentVisual>GetAllAgentVisualsForPeer()` | 方法 |
| `GetAgentVisualForPeer` | `public IAgentVisual GetAgentVisualForPeer(int visualsIndex)` | 方法 |
| `GetAgentVisualForPeer` | `public IAgentVisual GetAgentVisualForPeer(int visualsIndex, out IAgentVisual mountAgentVisuals)` | 方法 |
| `TickInactivityStatus` | `public void TickInactivityStatus()` | 方法 |
| `OnKillAnotherPeer` | `public void OnKillAnotherPeer(MissionPeer victimPeer)` | 方法 |
| `OverrideCultureWithTeamCulture` | `public void OverrideCultureWithTeamCulture()` | 方法 |
| `GetNumberOfTimesPeerKilledPeer` | `public int GetNumberOfTimesPeerKilledPeer(MissionPeer killedPeer)` | 方法 |
| `ResetKillRegistry` | `public void ResetKillRegistry()` | 方法 |
| `RefreshSelectedPerks` | `public bool RefreshSelectedPerks()` | 方法 |
| `OnTeamInitialPerkInfoReceived` | `public void OnTeamInitialPerkInfoReceived(int[]perks)` | 方法 |
| `NumberOfPerkLists` | `public const int NumberOfPerkLists` | 字段 |
| `MaxNumberOfTroopTypesPerCulture` | `public const int MaxNumberOfTroopTypesPerCulture` | 字段 |
| `MinKDACount` | `public const int MinKDACount` | 字段 |
| `MaxKDACount` | `public const int MaxKDACount` | 字段 |
| `MinScore` | `public const int MinScore` | 字段 |
| `MaxScore` | `public const int MaxScore` | 字段 |
| `MinSpawnTimer` | `public const int MinSpawnTimer` | 字段 |
| `CaptainBeingDetachedThreshold` | `public int CaptainBeingDetachedThreshold` | 字段 |
| `OnUpdateEquipmentSetIndexEventDelegate` | `public delegate void OnUpdateEquipmentSetIndexEventDelegate(MissionPeer lobbyPeer, int equipmentSetIndex);` | 方法 |
| `OnPerkUpdateEventDelegate` | `public delegate void OnPerkUpdateEventDelegate(MissionPeer peer);` | 方法 |
| `OnTeamChangedDelegate` | `public delegate void OnTeamChangedDelegate(NetworkCommunicator peer, Team previousTeam, Team newTeam);` | 方法 |
| `OnCultureChangedDelegate` | `public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture);` | 方法 |
| `OnPlayerKilledDelegate` | `public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer, MissionPeer killedPeer);` | 方法 |
| `OnUpdateEquipmentSetIndexEventDelegate` | `public delegate void OnUpdateEquipmentSetIndexEventDelegate(MissionPeer lobbyPeer, int equipmentSetIndex)` | 嵌套类型 |
| `OnPerkUpdateEventDelegate` | `public delegate void OnPerkUpdateEventDelegate(MissionPeer peer)` | 嵌套类型 |
| `OnTeamChangedDelegate` | `public delegate void OnTeamChangedDelegate(NetworkCommunicator peer, Team previousTeam, Team newTeam)` | 嵌套类型 |
| `OnCultureChangedDelegate` | `public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture)` | 嵌套类型 |
| `OnPlayerKilledDelegate` | `public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer, MissionPeer killedPeer)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PeerComponent](../../core-extra/PeerComponent/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
