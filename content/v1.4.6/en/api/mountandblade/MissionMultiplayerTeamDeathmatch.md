---
title: "MissionMultiplayerTeamDeathmatch"
description: "MissionMultiplayerTeamDeathmatch: a public class in TaleWorlds.MountAndBlade, inheriting MissionMultiplayerGameModeBase; 12 exposed members (9 methods, 2 properties, 1 fields). Source: TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatch.cs."
---
# MissionMultiplayerTeamDeathmatch

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerTeamDeathmatch : MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatch.cs`

## Overview

MissionMultiplayerTeamDeathmatch lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatch.cs. It is a public class, implementing/inheriting MissionMultiplayerGameModeBase; the inheritance chain is MissionMultiplayerTeamDeathmatch → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 12 public/protected members: 9 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerTeamDeathmatch is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionMultiplayerTeamDeathmatch → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 9/12, properties 2/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatch.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals` | property |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams` | property |
| `GetMissionType` | `public override MultiplayerGameType GetMissionType()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `OnPeerChangedTeam` | `public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `CheckForMatchEnd` | `public override bool CheckForMatchEnd()` | method |
| `GetWinnerTeam` | `public override Team GetWinnerTeam()` | method |
| `MaxScoreToEndMatch` | `public const int MaxScoreToEndMatch` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionMultiplayerGameModeBase](../MissionMultiplayerGameModeBase)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
