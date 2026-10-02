---
title: "MissionMultiplayerGameModeBase"
description: "MissionMultiplayerGameModeBase: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 33 exposed members (26 methods, 4 properties, 3 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerGameModeBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionMultiplayerGameModeBase : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionMultiplayerGameModeBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs. It is a public class (abstract), implementing/inheriting MissionNetwork; the inheritance chain is MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 33 public/protected members: 26 methods, 4 properties, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerGameModeBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 26/33, properties 4/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public abstract bool IsGameModeHidingAllAgentVisuals` | property |
| `IsGameModeUsingOpposingTeams` | `public abstract bool IsGameModeUsingOpposingTeams` | property |
| `IsGameModeAllowChargeDamageOnFriendly` | `public virtual bool IsGameModeAllowChargeDamageOnFriendly` | property |
| `SpawnComponent` | `public SpawnComponent SpawnComponent` | property |
| `GetMissionType` | `public abstract MultiplayerGameType GetMissionType();` | method |
| `CheckIfOvertime` | `public virtual bool CheckIfOvertime()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `CheckForWarmupEnd` | `public virtual bool CheckForWarmupEnd()` | method |
| `CheckForRoundEnd` | `public virtual bool CheckForRoundEnd()` | method |
| `CheckForMatchEnd` | `public virtual bool CheckForMatchEnd()` | method |
| `UseCultureSelection` | `public virtual bool UseCultureSelection()` | method |
| `UseRoundController` | `public virtual bool UseRoundController()` | method |
| `GetWinnerTeam` | `public virtual Team GetWinnerTeam()` | method |
| `OnPeerChangedTeam` | `public virtual void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `ClearPeerCounts` | `public void ClearPeerCounts()` | method |
| `ShouldSpawnVisualsForServer` | `public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer)` | method |
| `HandleAgentVisualSpawning` | `public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer, AgentBuildData spawningAgentBuildData, int troopCountInFormation = 0, bool useCosmetics = true)` | method |
| `AllowCustomPlayerBanners` | `public virtual bool AllowCustomPlayerBanners()` | method |
| `GetScoreForKill` | `public virtual int GetScoreForKill(Agent killedAgent)` | method |
| `GetTroopNumberMultiplierForMissingPlayer` | `public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)` | method |
| `GetCurrentGoldForPeer` | `public int GetCurrentGoldForPeer(MissionPeer peer)` | method |
| `ChangeCurrentGoldForPeer` | `public void ChangeCurrentGoldForPeer(MissionPeer peer, int newAmount)` | method |
| `HandleLateNewClientAfterLoadingFinished` | `protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `CheckIfPlayerCanDespawn` | `public virtual bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)` | method |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `string>GetUsedCosmeticsFromPeer` | `public Dictionary<string, string>GetUsedCosmeticsFromPeer(MissionPeer missionPeer, BasicCharacterObject selectedTroopCharacter)` | method |
| `AddCosmeticItemsToEquipment` | `public void AddCosmeticItemsToEquipment(Equipment equipment, Dictionary<string, string>choosenCosmetics)` | method |
| `IsClassAvailable` | `public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)` | method |
| `GoldCap` | `public const int GoldCap` | field |
| `PerkTickPeriod` | `public const float PerkTickPeriod` | field |
| `GameModeSystemTickPeriod` | `public const float GameModeSystemTickPeriod` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
