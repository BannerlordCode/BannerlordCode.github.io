---
title: "MissionScoreboardComponent"
description: "MissionScoreboardComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 41 exposed members (24 methods, 8 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionScoreboardComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionScoreboardComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionScoreboardComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is MissionScoreboardComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 41 public/protected members: 24 methods, 8 properties, 6 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionScoreboardComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionScoreboardComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 24/41, properties 8/41), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnRoundPropertiesChanged;` | `public event Action OnRoundPropertiesChanged;` | event |
| `Action` | `public event Action<BattleSideEnum>OnBotPropertiesChanged;` | event |
| `MissionPeer>OnPlayerSideChanged;` | `public event Action<Team, Team, MissionPeer>OnPlayerSideChanged;` | event |
| `MissionPeer>OnPlayerPropertiesChanged;` | `public event Action<BattleSideEnum, MissionPeer>OnPlayerPropertiesChanged;` | event |
| `int>OnMVPSelected;` | `public event Action<MissionPeer, int>OnMVPSelected;` | event |
| `OnScoreboardInitialized;` | `public event Action OnScoreboardInitialized;` | event |
| `IsOneSided` | `public bool IsOneSided` | property |
| `RoundWinner` | `public BattleSideEnum RoundWinner` | property |
| `MissionScoreboardComponent.ScoreboardHeader[]Headers` | `public MissionScoreboardComponent.ScoreboardHeader[]Headers` | property |
| `MissionScoreboardComponent` | `public MissionScoreboardComponent(IScoreboardData scoreboardData)` | constructor |
| `IEnumerable` | `public IEnumerable<BattleSideEnum>RoundWinnerList` | property |
| `MissionScoreboardComponent.MissionScoreboardSide[]Sides` | `public MissionScoreboardComponent.MissionScoreboardSide[]Sides` | property |
| `List` | `public List<MissionPeer>Spectators` | property |
| `AfterStart` | `public override void AfterStart()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `ResetBotScores` | `public void ResetBotScores()` | method |
| `ChangeTeamScore` | `public void ChangeTeamScore(Team team, int scoreChange)` | method |
| `GetSideSafe` | `public MissionScoreboardComponent.MissionScoreboardSide GetSideSafe(BattleSideEnum battleSide)` | method |
| `GetRoundScore` | `public int GetRoundScore(BattleSideEnum side)` | method |
| `HandleServerUpdateRoundScoresMessage` | `public void HandleServerUpdateRoundScoresMessage(GameNetworkMessage baseMessage)` | method |
| `HandleServerSetRoundMVP` | `public void HandleServerSetRoundMVP(GameNetworkMessage baseMessage)` | method |
| `CalculateTotalNumbers` | `public void CalculateTotalNumbers()` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `OnPlayerConnectedToServer` | `public override void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)` | method |
| `OnPlayerDisconnectedFromServer` | `public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAssignPlayerAsSergeantOfFormation` | `public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)` | method |
| `BotPropertiesChanged` | `public void BotPropertiesChanged(BattleSideEnum side)` | method |
| `PlayerPropertiesChanged` | `public void PlayerPropertiesChanged(NetworkCommunicator player)` | method |
| `PlayerPropertiesChanged` | `public void PlayerPropertiesChanged(MissionPeer player)` | method |
| `HandleLateNewClientAfterSynchronized` | `protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `HandleServerEventBotDataMessage` | `public void HandleServerEventBotDataMessage(GameNetworkMessage baseMessage)` | method |
| `OnRoundEnding` | `public void OnRoundEnding()` | method |
| `OnMultiplayerGameClientBehaviorInitialized` | `public void OnMultiplayerGameClientBehaviorInitialized(ref Action<NetworkCommunicator>onBotsControlledChanged)` | method |
| `GetMatchWinnerSide` | `public BattleSideEnum GetMatchWinnerSide()` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `ScoreboardHeader` | `public struct ScoreboardHeader` | property |
| `MissionScoreboardSide` | `public class MissionScoreboardSide` | property |
| `ScoreboardHeader` | `public struct ScoreboardHeader` | nested type |
| `MissionScoreboardSide` | `public class MissionScoreboardSide` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
