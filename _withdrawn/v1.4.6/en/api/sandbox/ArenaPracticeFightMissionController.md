---
title: "ArenaPracticeFightMissionController"
description: "ArenaPracticeFightMissionController: a public class in SandBox.Missions.MissionLogics.Arena, inheriting MissionLogic; 15 exposed members (8 methods, 6 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArenaPracticeFightMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Arena`
**Module:** `SandBox`
**Type:** `public class ArenaPracticeFightMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ArenaPracticeFightMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is ArenaPracticeFightMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 15 public/protected members: 8 methods, 6 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArenaPracticeFightMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics.Arena`, inheritance chain ArenaPracticeFightMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/15, properties 6/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RemainingOpponentCountFromLastPractice` | `public int RemainingOpponentCountFromLastPractice` | property |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing` | property |
| `OpponentCountBeatenByPlayer` | `public int OpponentCountBeatenByPlayer` | property |
| `RemainingOpponentCount` | `public int RemainingOpponentCount` | property |
| `IsPlayerSurvived` | `public bool IsPlayerSurvived` | property |
| `AfterPractice` | `public bool AfterPractice` | property |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |
| `StartPlayerPractice` | `public void StartPlayerPractice()` | method |
| `List` | `public static List<CharacterObject>GetParticipantCharacters(Settlement settlement)` | method |
| `TeleportTime` | `public int TeleportTime` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace ArenaAgentStateDeciderLogic](../ArenaAgentStateDeciderLogic/)
- [same namespace ArenaDuelMissionBehavior](../ArenaDuelMissionBehavior/)
- [same namespace ArenaDuelMissionController](../ArenaDuelMissionController/)
