---
title: "TournamentJoustingMissionController"
description: "TournamentJoustingMissionController: a public class in SandBox.Tournaments.MissionLogics, inheriting MissionLogic, ITournamentGameBehavior; 20 exposed members (12 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentJoustingMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TournamentJoustingMissionController : MissionLogic, ITournamentGameBehavior`
**File:** `SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TournamentJoustingMissionController lives in the SandBox module, source file SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs. It is a public class, implementing/inheriting MissionLogic, ITournamentGameBehavior; the inheritance chain is TournamentJoustingMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 20 public/protected members: 12 methods, 5 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentJoustingMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Tournaments.MissionLogics`, inheritance chain TournamentJoustingMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 12/20, properties 0/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `VictoryAchieved;` | `public event TournamentJoustingMissionController.JoustingEventDelegate VictoryAchieved;` | event |
| `PointGanied;` | `public event TournamentJoustingMissionController.JoustingEventDelegate PointGanied;` | event |
| `Disqualified;` | `public event TournamentJoustingMissionController.JoustingEventDelegate Disqualified;` | event |
| `Unconscious;` | `public event TournamentJoustingMissionController.JoustingEventDelegate Unconscious;` | event |
| `AgentStateChanged;` | `public event TournamentJoustingMissionController.JoustingAgentStateChangedEventDelegate AgentStateChanged;` | event |
| `TournamentJoustingMissionController` | `public TournamentJoustingMissionController(CultureObject culture)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `StartMatch` | `public void StartMatch(TournamentMatch match, bool isLastRound)` | method |
| `SkipMatch` | `public void SkipMatch(TournamentMatch match)` | method |
| `IsMatchEnded` | `public bool IsMatchEnded()` | method |
| `OnMatchEnded` | `public void OnMatchEnded()` | method |
| `IsAgentInTheTrack` | `public bool IsAgentInTheTrack(Agent agent, bool inCurrentTrack = true)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnJoustingAgentStateChanged` | `public void OnJoustingAgentStateChanged(Agent agent, JoustingAgentController.JoustingAgentState state)` | method |
| `JoustingEventDelegate` | `public delegate void JoustingEventDelegate(Agent affectedAgent, Agent affectorAgent);` | method |
| `JoustingAgentStateChangedEventDelegate` | `public delegate void JoustingAgentStateChangedEventDelegate(Agent agent, JoustingAgentController.JoustingAgentState state);` | method |
| `JoustingEventDelegate` | `public delegate void JoustingEventDelegate(Agent affectedAgent, Agent affectorAgent)` | nested type |
| `JoustingAgentStateChangedEventDelegate` | `public delegate void JoustingAgentStateChangedEventDelegate(Agent agent, JoustingAgentController.JoustingAgentState state)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface ITournamentGameBehavior](../ITournamentGameBehavior/)
- [same namespace TournamentArcheryMissionController](../TournamentArcheryMissionController/)
- [same namespace TournamentBehavior](../TournamentBehavior/)
- [same namespace TournamentFightMissionController](../TournamentFightMissionController/)
- [same namespace TownHorseRaceMissionController](../TownHorseRaceMissionController/)
