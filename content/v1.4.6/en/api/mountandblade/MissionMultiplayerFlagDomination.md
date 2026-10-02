---
title: "MissionMultiplayerFlagDomination"
description: "MissionMultiplayerFlagDomination: a public class in TaleWorlds.MountAndBlade, inheriting MissionMultiplayerGameModeBase, IAnalyticsFlagInfo; 47 exposed members (27 methods, 5 properties, 14 fields). Source: TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs."
---
# MissionMultiplayerFlagDomination

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerFlagDomination : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs`

## Overview

MissionMultiplayerFlagDomination lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs. It is a public class, implementing/inheriting MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior; the inheritance chain is MissionMultiplayerFlagDomination → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 47 public/protected members: 27 methods, 5 properties, 14 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerFlagDomination is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionMultiplayerFlagDomination → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 27/47, properties 5/47), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals` | property |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<FlagCapturePoint>AllCapturePoints` | property |
| `MoraleRounded` | `public float MoraleRounded` | property |
| `GameModeUsesSingleSpawning` | `public bool GameModeUsesSingleSpawning` | property |
| `UseGold` | `public bool UseGold()` | method |
| `AllowCustomPlayerBanners` | `public override bool AllowCustomPlayerBanners()` | method |
| `UseRoundController` | `public override bool UseRoundController()` | method |
| `MissionMultiplayerFlagDomination` | `public MissionMultiplayerFlagDomination(MultiplayerGameType gameType)` | constructor |
| `GetMissionType` | `public override MultiplayerGameType GetMissionType()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnPeerChangedTeam` | `public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `GetTimeUntilBattleSideVictory` | `public float GetTimeUntilBattleSideVictory(BattleSideEnum side)` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `CheckIfOvertime` | `public override bool CheckIfOvertime()` | method |
| `CheckForWarmupEnd` | `public override bool CheckForWarmupEnd()` | method |
| `CheckForRoundEnd` | `public override bool CheckForRoundEnd()` | method |
| `UseCultureSelection` | `public override bool UseCultureSelection()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `HandleEarlyPlayerDisconnect` | `protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `ForfeitSpawning` | `public void ForfeitSpawning(NetworkCommunicator peer)` | method |
| `SetWinnerTeam` | `public static void SetWinnerTeam(int winnerTeamNo)` | method |
| `GetNumberOfAttackersAroundFlag` | `public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)` | method |
| `GetFlagOwnerTeam` | `public Team GetFlagOwnerTeam(FlagCapturePoint flag)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `GetTroopNumberMultiplierForMissingPlayer` | `public override float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)` | method |
| `HandleNewClientAfterLoadingFinished` | `protected override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `NumberOfFlagsInGame` | `public const int NumberOfFlagsInGame` | field |
| `MoraleRoundPrecision` | `public const float MoraleRoundPrecision` | field |
| `DefaultGoldAmountForTroopSelectionForSkirmish` | `public const int DefaultGoldAmountForTroopSelectionForSkirmish` | field |
| `MaxGoldAmountToCarryOverForSkirmish` | `public const int MaxGoldAmountToCarryOverForSkirmish` | field |
| `InitialGoldAmountForTroopSelectionForBattle` | `public const int InitialGoldAmountForTroopSelectionForBattle` | field |
| `DefaultGoldAmountForTroopSelectionForBattle` | `public const int DefaultGoldAmountForTroopSelectionForBattle` | field |
| `MaxGoldAmountToCarryOverForBattle` | `public const int MaxGoldAmountToCarryOverForBattle` | field |
| `TimeTillFlagRemovalForPriorInfoInSeconds` | `public const float TimeTillFlagRemovalForPriorInfoInSeconds` | field |
| `PointRemovalTimeInSecondsForBattle` | `public const float PointRemovalTimeInSecondsForBattle` | field |
| `PointRemovalTimeInSecondsForCaptain` | `public const float PointRemovalTimeInSecondsForCaptain` | field |
| `PointRemovalTimeInSecondsForSkirmish` | `public const float PointRemovalTimeInSecondsForSkirmish` | field |
| `MoraleMultiplierForEachFlagForBattle` | `public const float MoraleMultiplierForEachFlagForBattle` | field |
| `MoraleMultiplierForEachFlagForCaptain` | `public const float MoraleMultiplierForEachFlagForCaptain` | field |
| `MoraleMultiplierForEachFlagForSkirmish` | `public const float MoraleMultiplierForEachFlagForSkirmish` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionMultiplayerGameModeBase](../MissionMultiplayerGameModeBase)
- [base / interface IAnalyticsFlagInfo](../IAnalyticsFlagInfo)
- [base / interface IMissionBehavior](../IMissionBehavior)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
