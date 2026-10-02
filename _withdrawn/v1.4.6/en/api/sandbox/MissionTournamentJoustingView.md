---
title: "MissionTournamentJoustingView"
description: "MissionTournamentJoustingView: a public class in SandBox.View.Missions.Tournaments, inheriting MissionView; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionTournamentJoustingView

**Namespace:** `SandBox.View.Missions.Tournaments`
**Module:** `SandBox.View`
**Type:** `public class MissionTournamentJoustingView : MissionView`
**File:** `SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionTournamentJoustingView lives in the SandBox.View module, source file SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionTournamentJoustingView → MissionView → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionTournamentJoustingView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions.Tournaments`, inheritance chain MissionTournamentJoustingView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `ShowMessage` | `public void ShowMessage(string str, float duration, bool hasPriority = true)` | method |
| `ShowMessage` | `public void ShowMessage(Agent agent, string str, float duration, bool hasPriority = true)` | method |
| `DeleteMessage` | `public void DeleteMessage(string str)` | method |
| `DeleteMessage` | `public void DeleteMessage(Agent agent, string str)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [same namespace MissionTournamentView](../MissionTournamentView/)
- [same namespace TournamentMissionViews](../TournamentMissionViews/)
