---
title: "TownHorseRaceMissionController"
description: "TownHorseRaceMissionController: a public class in SandBox.Tournaments.MissionLogics, inheriting MissionLogic, ITournamentGameBehavior; 11 exposed members (6 methods, 2 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TownHorseRaceMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TownHorseRaceMissionController : MissionLogic, ITournamentGameBehavior`
**File:** `SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TownHorseRaceMissionController lives in the SandBox module, source file SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs. It is a public class, implementing/inheriting MissionLogic, ITournamentGameBehavior; the inheritance chain is TownHorseRaceMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 11 public/protected members: 6 methods, 2 properties, 1 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TownHorseRaceMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Tournaments.MissionLogics`, inheritance chain TownHorseRaceMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 6/11, properties 2/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public List<TownHorseRaceMissionController.CheckPoint>CheckPoints` | property |
| `TownHorseRaceMissionController` | `public TownHorseRaceMissionController(CultureObject culture)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `StartMatch` | `public void StartMatch(TournamentMatch match, bool isLastRound)` | method |
| `SkipMatch` | `public void SkipMatch(TournamentMatch match)` | method |
| `IsMatchEnded` | `public bool IsMatchEnded()` | method |
| `OnMatchEnded` | `public void OnMatchEnded()` | method |
| `TourCount` | `public const int TourCount` | field |
| `CheckPoint` | `public class CheckPoint` | property |
| `CheckPoint` | `public class CheckPoint` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface ITournamentGameBehavior](../ITournamentGameBehavior/)
- [same namespace TournamentArcheryMissionController](../TournamentArcheryMissionController/)
- [same namespace TournamentBehavior](../TournamentBehavior/)
- [same namespace TournamentFightMissionController](../TournamentFightMissionController/)
- [same namespace TournamentJoustingMissionController](../TournamentJoustingMissionController/)
