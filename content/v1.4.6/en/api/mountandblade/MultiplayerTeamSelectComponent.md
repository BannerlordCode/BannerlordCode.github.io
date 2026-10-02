---
title: "MultiplayerTeamSelectComponent"
description: "MultiplayerTeamSelectComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 20 exposed members (14 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs."
---
# MultiplayerTeamSelectComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs`

## Overview

MultiplayerTeamSelectComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is MultiplayerTeamSelectComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 20 public/protected members: 14 methods, 1 properties, 4 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerTeamSelectComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MultiplayerTeamSelectComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 14/20, properties 1/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnSelectingTeam;` | `public event MultiplayerTeamSelectComponent.OnSelectingTeamDelegate OnSelectingTeam;` | event |
| `OnMyTeamChange;` | `public event Action OnMyTeamChange;` | event |
| `OnUpdateTeams;` | `public event Action OnUpdateTeams;` | event |
| `OnUpdateFriendsPerTeam;` | `public event Action OnUpdateFriendsPerTeam;` | event |
| `TeamSelectionEnabled` | `public bool TeamSelectionEnabled` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `SelectTeam` | `public void SelectTeam()` | method |
| `UpdateTeams` | `public void UpdateTeams(NetworkCommunicator peer, Team oldTeam, Team newTeam)` | method |
| `List` | `public List<Team>GetDisabledTeams()` | method |
| `ChangeTeamServer` | `public void ChangeTeamServer(NetworkCommunicator networkPeer, Team team)` | method |
| `ChangeTeam` | `public void ChangeTeam(Team team)` | method |
| `GetPlayerCountForTeam` | `public int GetPlayerCountForTeam(Team team)` | method |
| `IEnumerable` | `public IEnumerable<VirtualPlayer>GetFriendsForTeam(Team team)` | method |
| `BalanceTeams` | `public void BalanceTeams()` | method |
| `AutoAssignTeam` | `public void AutoAssignTeam(NetworkCommunicator peer)` | method |
| `OnSelectingTeamDelegate` | `public delegate void OnSelectingTeamDelegate(List<Team>disableTeams);` | method |
| `OnSelectingTeamDelegate` | `public delegate void OnSelectingTeamDelegate(List<Team>disableTeams)` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionNetwork](../MissionNetwork)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
