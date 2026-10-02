---
title: "MusicTournamentMissionView"
description: "MusicTournamentMissionView: a public class in SandBox.View.Missions.Sound.Components, inheriting MissionView, IMusicHandler; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/Sound/Components/MusicTournamentMissionView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MusicTournamentMissionView

**Namespace:** `SandBox.View.Missions.Sound.Components`
**Module:** `SandBox.View`
**Type:** `public class MusicTournamentMissionView : MissionView, IMusicHandler`
**File:** `SandBox.View/Missions/Sound/Components/MusicTournamentMissionView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MusicTournamentMissionView lives in the SandBox.View module, source file SandBox.View/Missions/Sound/Components/MusicTournamentMissionView.cs. It is a public class, implementing/inheriting MissionView, IMusicHandler; the inheritance chain is MusicTournamentMissionView → MissionView → MissionBehavior → IMissionBehavior. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MusicTournamentMissionView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions.Sound.Components`, inheritance chain MusicTournamentMissionView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/Sound/Components/MusicTournamentMissionView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `OnMissileHit` | `public override void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | method |
| `OnMeleeHit` | `public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | method |
| `OnTournamentRoundBegin` | `public void OnTournamentRoundBegin(bool isFinalRound)` | method |
| `OnTournamentRoundEnd` | `public void OnTournamentRoundEnd()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [base / interface IMusicHandler](../../mission-ext/IMusicHandler/)
- [same namespace MusicArenaPracticeMissionView](../MusicArenaPracticeMissionView/)
