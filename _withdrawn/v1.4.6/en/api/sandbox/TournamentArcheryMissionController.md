---
title: "TournamentArcheryMissionController"
description: "TournamentArcheryMissionController: a public class in SandBox.Tournaments.MissionLogics, inheriting MissionLogic, ITournamentGameBehavior; 10 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentArcheryMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TournamentArcheryMissionController : MissionLogic, ITournamentGameBehavior`
**File:** `SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TournamentArcheryMissionController lives in the SandBox module, source file SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs. It is a public class, implementing/inheriting MissionLogic, ITournamentGameBehavior; the inheritance chain is TournamentArcheryMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 10 public/protected members: 8 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentArcheryMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Tournaments.MissionLogics`, inheritance chain TournamentArcheryMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<ArcheryTournamentAgentController>AgentControllers` | property |
| `TournamentArcheryMissionController` | `public TournamentArcheryMissionController(CultureObject culture)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `StartMatch` | `public void StartMatch(TournamentMatch match, bool isLastRound)` | method |
| `SkipMatch` | `public void SkipMatch(TournamentMatch match)` | method |
| `IsMatchEnded` | `public bool IsMatchEnded()` | method |
| `OnMatchEnded` | `public void OnMatchEnded()` | method |
| `OnTargetDestroyed` | `public void OnTargetDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon attackerWeapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface ITournamentGameBehavior](../ITournamentGameBehavior/)
- [same namespace TournamentBehavior](../TournamentBehavior/)
- [same namespace TournamentFightMissionController](../TournamentFightMissionController/)
- [same namespace TournamentJoustingMissionController](../TournamentJoustingMissionController/)
- [same namespace TownHorseRaceMissionController](../TownHorseRaceMissionController/)
