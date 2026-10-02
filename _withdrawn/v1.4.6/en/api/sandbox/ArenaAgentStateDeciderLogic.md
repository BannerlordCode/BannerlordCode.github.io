---
title: "ArenaAgentStateDeciderLogic"
description: "ArenaAgentStateDeciderLogic: a public class in SandBox.Missions.MissionLogics.Arena, inheriting MissionLogic, IAgentStateDecider; 1 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArenaAgentStateDeciderLogic

**Namespace:** `SandBox.Missions.MissionLogics.Arena`
**Module:** `SandBox`
**Type:** `public class ArenaAgentStateDeciderLogic : MissionLogic, IAgentStateDecider, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ArenaAgentStateDeciderLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs. It is a public class, implementing/inheriting MissionLogic, IAgentStateDecider, IMissionBehavior; the inheritance chain is ArenaAgentStateDeciderLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArenaAgentStateDeciderLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics.Arena`, inheritance chain ArenaAgentStateDeciderLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetAgentState` | `public AgentState GetAgentState(Agent effectedAgent, float deathProbability, out bool usedSurgery)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface IAgentStateDecider](../../mission-ext/IAgentStateDecider/)
- [base / interface IMissionBehavior](../../mission-ext/IMissionBehavior/)
- [same namespace ArenaDuelMissionBehavior](../ArenaDuelMissionBehavior/)
- [same namespace ArenaDuelMissionController](../ArenaDuelMissionController/)
- [same namespace ArenaPracticeFightMissionController](../ArenaPracticeFightMissionController/)
