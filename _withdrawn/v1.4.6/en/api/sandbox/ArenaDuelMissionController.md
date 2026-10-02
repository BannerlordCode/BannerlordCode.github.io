---
title: "ArenaDuelMissionController"
description: "ArenaDuelMissionController: a public class in SandBox.Missions.MissionLogics.Arena, inheriting MissionLogic; 5 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArenaDuelMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Arena`
**Module:** `SandBox`
**Type:** `public class ArenaDuelMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ArenaDuelMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is ArenaDuelMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArenaDuelMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics.Arena`, inheritance chain ArenaDuelMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ArenaDuelMissionController` | `public ArenaDuelMissionController(CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBothSideWithHorses, Action<CharacterObject>onDuelEnd, float customAgentHealth)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace ArenaAgentStateDeciderLogic](../ArenaAgentStateDeciderLogic/)
- [same namespace ArenaDuelMissionBehavior](../ArenaDuelMissionBehavior/)
- [same namespace ArenaPracticeFightMissionController](../ArenaPracticeFightMissionController/)
