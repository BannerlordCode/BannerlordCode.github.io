---
title: "TournamentFightMissionController"
description: "TournamentFightMissionController: a public class in SandBox.Tournaments.MissionLogics, inheriting MissionLogic, ITournamentGameBehavior; 15 exposed members (14 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentFightMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TournamentFightMissionController : MissionLogic, ITournamentGameBehavior`
**File:** `SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TournamentFightMissionController lives in the SandBox module, source file SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs. It is a public class, implementing/inheriting MissionLogic, ITournamentGameBehavior; the inheritance chain is TournamentFightMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 15 public/protected members: 14 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentFightMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Tournaments.MissionLogics`, inheritance chain TournamentFightMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 14/15, properties 0/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TournamentFightMissionController` | `public TournamentFightMissionController(CultureObject culture)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `PrepareForMatch` | `public void PrepareForMatch()` | method |
| `StartMatch` | `public void StartMatch(TournamentMatch match, bool isLastRound)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `SkipMatch` | `public void SkipMatch(TournamentMatch match)` | method |
| `IsMatchEnded` | `public bool IsMatchEnded()` | method |
| `OnMatchResultsReady` | `public void OnMatchResultsReady()` | method |
| `OnMatchEnded` | `public void OnMatchEnded()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `CanAgentRout` | `public bool CanAgentRout(Agent agent)` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `CheckIfIsThereAnyEnemies` | `public bool CheckIfIsThereAnyEnemies()` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface ITournamentGameBehavior](../ITournamentGameBehavior/)
- [same namespace TournamentArcheryMissionController](../TournamentArcheryMissionController/)
- [same namespace TournamentBehavior](../TournamentBehavior/)
- [same namespace TournamentJoustingMissionController](../TournamentJoustingMissionController/)
- [same namespace TownHorseRaceMissionController](../TownHorseRaceMissionController/)
