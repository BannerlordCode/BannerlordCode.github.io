---
title: "ArenaDuelMissionController"
description: "ArenaDuelMissionController: a public class in SandBox, inheriting MissionLogic; 5 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs."
---
# ArenaDuelMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Arena`
**Module:** `SandBox`
**Type:** `public class ArenaDuelMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs`

## Overview

ArenaDuelMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is ArenaDuelMissionController → MissionLogic. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArenaDuelMissionController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Arena) the module directory; inheritance chain ArenaDuelMissionController → MissionLogic. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArenaDuelMissionController` | `public ArenaDuelMissionController(CharacterObject duelCharacter, bool requireCivilianEquipment, bool spawnBothSideWithHorses, Action<CharacterObject>onDuelEnd, float customAgentHealth)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArenaAgentStateDeciderLogic](../ArenaAgentStateDeciderLogic)
- [same namespace ArenaDuelMissionBehavior](../ArenaDuelMissionBehavior)
- [same namespace ArenaPracticeFightMissionController](../ArenaPracticeFightMissionController)
