---
title: "ArenaAgentStateDeciderLogic"
description: "ArenaAgentStateDeciderLogic: a public class in SandBox, inheriting MissionLogic, IAgentStateDecider; 1 exposed members (1 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs."
---
# ArenaAgentStateDeciderLogic

**Namespace:** `SandBox.Missions.MissionLogics.Arena`
**Module:** `SandBox`
**Type:** `public class ArenaAgentStateDeciderLogic : MissionLogic, IAgentStateDecider, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs`

## Overview

ArenaAgentStateDeciderLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs. It is a public class, implementing/inheriting MissionLogic, IAgentStateDecider, IMissionBehavior; the inheritance chain is ArenaAgentStateDeciderLogic → MissionLogic. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArenaAgentStateDeciderLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Arena) the module directory; inheritance chain ArenaAgentStateDeciderLogic → MissionLogic. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAgentState` | `public AgentState GetAgentState(Agent effectedAgent, float deathProbability, out bool usedSurgery)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArenaDuelMissionBehavior](../ArenaDuelMissionBehavior)
- [same namespace ArenaDuelMissionController](../ArenaDuelMissionController)
- [same namespace ArenaPracticeFightMissionController](../ArenaPracticeFightMissionController)
