---
title: "MusicArenaPracticeMissionView"
description: "MusicArenaPracticeMissionView: a public class in SandBox.View, inheriting MissionView, IMusicHandler; 9 exposed members (9 methods, 0 properties, 0 fields). Source: SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs."
---
# MusicArenaPracticeMissionView

**Namespace:** `SandBox.View.Missions.Sound.Components`
**Module:** `SandBox.View`
**Type:** `public class MusicArenaPracticeMissionView : MissionView, IMusicHandler`
**File:** `SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs`

## Overview

MusicArenaPracticeMissionView lives in the SandBox.View module, source file SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs. It is a public class, implementing/inheriting MissionView, IMusicHandler; the inheritance chain is MusicArenaPracticeMissionView → MissionView. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MusicArenaPracticeMissionView is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions.Sound.Components) the module directory; inheritance chain MusicArenaPracticeMissionView → MissionView. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. MissionView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `OnMissileHit` | `public override void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | method |
| `OnMeleeHit` | `public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)` | method |
| `OnUpdated` | `public void OnUpdated(float dt)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MusicTournamentMissionView](../MusicTournamentMissionView)
