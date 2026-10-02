---
title: "MissionPeer"
description: "MissionPeer: a public class in TaleWorlds.MountAndBlade, inheriting PeerComponent; 81 exposed members (29 methods, 33 properties, 8 fields). Source: TaleWorlds.MountAndBlade/MissionPeer.cs."
---
# MissionPeer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionPeer : PeerComponent`
**File:** `TaleWorlds.MountAndBlade/MissionPeer.cs`

## Overview

MissionPeer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionPeer.cs. It is a public class, implementing/inheriting PeerComponent; the inheritance chain is MissionPeer → PeerComponent. It exposes 81 public/protected members: 29 methods, 33 properties, 8 fields, 5 events, 1 constructors, 5 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionPeer is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionPeer → PeerComponent. The surface is property-led (properties 33/81, methods 29/81), so it mostly exposes state for reading. PeerComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionPeer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEquipmentIndexRefreshed;` | `public static event MissionPeer.OnUpdateEquipmentSetIndexEventDelegate OnEquipmentIndexRefreshed;` | event |
| `OnPerkSelectionUpdated;` | `public static event MissionPeer.OnPerkUpdateEventDelegate OnPerkSelectionUpdated;` | event |
| `OnPreTeamChanged;` | `public static event MissionPeer.OnTeamChangedDelegate OnPreTeamChanged;` | event |
| `OnTeamChanged;` | `public static event MissionPeer.OnTeamChangedDelegate OnTeamChanged;` | event |
| `OnPlayerKilled;` | `public static event MissionPeer.OnPlayerKilledDelegate OnPlayerKilled;` | event |
| `JoinTime` | `public DateTime JoinTime` | property |
| `EquipmentUpdatingExpired` | `public bool EquipmentUpdatingExpired` | property |
| `TeamInitialPerkInfoReady` | `public bool TeamInitialPerkInfoReady` | property |
| `HasSpawnedAgentVisuals` | `public bool HasSpawnedAgentVisuals` | property |
| `SelectedTroopIndex` | `public int SelectedTroopIndex` | property |
| `NextSelectedTroopIndex` | `public int NextSelectedTroopIndex` | property |
| `Representative` | `public MissionRepresentativeBase Representative` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<int[]>Perks` | property |
| `DisplayedName` | `public string DisplayedName` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<MPPerkObject>SelectedPerks` | property |
| `MissionPeer` | `public MissionPeer()` | constructor |
| `SpawnTimer` | `public Timer SpawnTimer` | property |
| `HasSpawnTimerExpired` | `public bool HasSpawnTimerExpired` | property |
| `VotedForBan` | `public BasicCultureObject VotedForBan` | property |
| `VotedForSelection` | `public BasicCultureObject VotedForSelection` | property |
| `WantsToSpawnAsBot` | `public bool WantsToSpawnAsBot` | property |
| `SpawnCountThisRound` | `public int SpawnCountThisRound` | property |
| `RequestedKickPollCount` | `public int RequestedKickPollCount` | property |
| `KillCount` | `public int KillCount` | property |
| `AssistCount` | `public int AssistCount` | property |
| `DeathCount` | `public int DeathCount` | property |
| `Score` | `public int Score` | property |
| `BotsUnderControlAlive` | `public int BotsUnderControlAlive` | property |
| `BotsUnderControlTotal` | `public int BotsUnderControlTotal` | property |
| `IsControlledAgentActive` | `public bool IsControlledAgentActive` | property |
| `ControlledAgent` | `public Agent ControlledAgent` | property |
| `FollowedAgent` | `public Agent FollowedAgent` | property |
| `Team` | `public Team Team` | property |
| `Culture` | `public BasicCultureObject Culture` | property |
| `ControlledFormation` | `public Formation ControlledFormation` | property |
| `IsAgentAliveForChatting` | `public bool IsAgentAliveForChatting` | property |
| `IsMutedFromPlatform` | `public bool IsMutedFromPlatform` | property |
| `IsMuted` | `public bool IsMuted` | property |
| `IsMutedFromGameOrPlatform` | `public bool IsMutedFromGameOrPlatform` | property |
| `SetMutedFromPlatform` | `public void SetMutedFromPlatform(bool isMuted)` | method |
| `SetMuted` | `public void SetMuted(bool isMuted)` | method |
| `ResetRequestedKickPollCount` | `public void ResetRequestedKickPollCount()` | method |
| `IncrementRequestedKickPollCount` | `public void IncrementRequestedKickPollCount()` | method |
| `GetSelectedPerkIndexWithPerkListIndex` | `public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex, int perkListIndex)` | method |
| `SelectPerk` | `public bool SelectPerk(int perkListIndex, int perkIndex, int enforcedSelectedTroopIndex = -1)` | method |
| `HandleVoteChange` | `public void HandleVoteChange(CultureVoteTypes voteType, BasicCultureObject culture)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnInitialize` | `public override void OnInitialize()` | method |
| `GetAmountOfAgentVisualsForPeer` | `public int GetAmountOfAgentVisualsForPeer()` | method |
| `GetVisuals` | `public PeerVisualsHolder GetVisuals(int visualIndex)` | method |
| `ClearVisuals` | `public void ClearVisuals(int visualIndex)` | method |
| `ClearAllVisuals` | `public void ClearAllVisuals(bool freeResources = false)` | method |
| `OnVisualsSpawned` | `public void OnVisualsSpawned(PeerVisualsHolder visualsHolder, int visualIndex)` | method |
| `IEnumerable` | `public IEnumerable<IAgentVisual>GetAllAgentVisualsForPeer()` | method |
| `GetAgentVisualForPeer` | `public IAgentVisual GetAgentVisualForPeer(int visualsIndex)` | method |
| `GetAgentVisualForPeer` | `public IAgentVisual GetAgentVisualForPeer(int visualsIndex, out IAgentVisual mountAgentVisuals)` | method |
| `TickInactivityStatus` | `public void TickInactivityStatus()` | method |
| `OnKillAnotherPeer` | `public void OnKillAnotherPeer(MissionPeer victimPeer)` | method |
| `OverrideCultureWithTeamCulture` | `public void OverrideCultureWithTeamCulture()` | method |
| `GetNumberOfTimesPeerKilledPeer` | `public int GetNumberOfTimesPeerKilledPeer(MissionPeer killedPeer)` | method |
| `ResetKillRegistry` | `public void ResetKillRegistry()` | method |
| `RefreshSelectedPerks` | `public bool RefreshSelectedPerks()` | method |
| `OnTeamInitialPerkInfoReceived` | `public void OnTeamInitialPerkInfoReceived(int[]perks)` | method |
| `NumberOfPerkLists` | `public const int NumberOfPerkLists` | field |
| `MaxNumberOfTroopTypesPerCulture` | `public const int MaxNumberOfTroopTypesPerCulture` | field |
| `MinKDACount` | `public const int MinKDACount` | field |
| `MaxKDACount` | `public const int MaxKDACount` | field |
| `MinScore` | `public const int MinScore` | field |
| `MaxScore` | `public const int MaxScore` | field |
| `MinSpawnTimer` | `public const int MinSpawnTimer` | field |
| `CaptainBeingDetachedThreshold` | `public int CaptainBeingDetachedThreshold` | field |
| `OnUpdateEquipmentSetIndexEventDelegate` | `public delegate void OnUpdateEquipmentSetIndexEventDelegate(MissionPeer lobbyPeer, int equipmentSetIndex);` | method |
| `OnPerkUpdateEventDelegate` | `public delegate void OnPerkUpdateEventDelegate(MissionPeer peer);` | method |
| `OnTeamChangedDelegate` | `public delegate void OnTeamChangedDelegate(NetworkCommunicator peer, Team previousTeam, Team newTeam);` | method |
| `OnCultureChangedDelegate` | `public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture);` | method |
| `OnPlayerKilledDelegate` | `public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer, MissionPeer killedPeer);` | method |
| `OnUpdateEquipmentSetIndexEventDelegate` | `public delegate void OnUpdateEquipmentSetIndexEventDelegate(MissionPeer lobbyPeer, int equipmentSetIndex)` | nested type |
| `OnPerkUpdateEventDelegate` | `public delegate void OnPerkUpdateEventDelegate(MissionPeer peer)` | nested type |
| `OnTeamChangedDelegate` | `public delegate void OnTeamChangedDelegate(NetworkCommunicator peer, Team previousTeam, Team newTeam)` | nested type |
| `OnCultureChangedDelegate` | `public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture)` | nested type |
| `OnPlayerKilledDelegate` | `public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer, MissionPeer killedPeer)` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
