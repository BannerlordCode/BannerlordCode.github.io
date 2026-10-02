---
title: "TournamentArcheryMissionController"
description: "TournamentArcheryMissionController: a public class in SandBox, inheriting MissionLogic, ITournamentGameBehavior; 10 exposed members (8 methods, 1 properties, 0 fields). Source: SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs."
---
# TournamentArcheryMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TournamentArcheryMissionController : MissionLogic, ITournamentGameBehavior`
**File:** `SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs`

## Overview

TournamentArcheryMissionController lives in the SandBox module, source file SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs. It is a public class, implementing/inheriting MissionLogic, ITournamentGameBehavior; the inheritance chain is TournamentArcheryMissionController → MissionLogic. It exposes 10 public/protected members: 8 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentArcheryMissionController is a top-level type in SandBox, namespace differing from (SandBox.Tournaments.MissionLogics) the module directory; inheritance chain TournamentArcheryMissionController → MissionLogic. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ITournamentGameBehavior](../ITournamentGameBehavior)
- [same namespace TournamentBehavior](../TournamentBehavior)
- [same namespace TournamentFightMissionController](../TournamentFightMissionController)
- [same namespace TournamentJoustingMissionController](../TournamentJoustingMissionController)
- [same namespace TownHorseRaceMissionController](../TownHorseRaceMissionController)
