---
title: "StealthAreaMissionLogic"
description: "StealthAreaMissionLogic: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 14 exposed members (9 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StealthAreaMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class StealthAreaMissionLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

StealthAreaMissionLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is StealthAreaMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 14 public/protected members: 9 methods, 3 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthAreaMissionLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain StealthAreaMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 9/14, properties 3/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/StealthAreaMissionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<Agent>AllyTroops` | property |
| `AllReinforcementsCalled` | `public bool AllReinforcementsCalled` | property |
| `IsSentry` | `public bool IsSentry(Agent agent)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnObjectUsed` | `public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | method |
| `CheckIfAllStealthAreasAreTriggered` | `public bool CheckIfAllStealthAreasAreTriggered()` | method |
| `CheckIfAllStealthAreasReinforcementsAreCalled` | `public bool CheckIfAllStealthAreasReinforcementsAreCalled()` | method |
| `MBList` | `public delegate MBList<Agent>SpawnReinforcementAllyTroopsDelegate(StealthAreaMissionLogic.StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker);` | method |
| `StealthAreaData` | `public class StealthAreaData` | property |
| `MBList` | `public delegate MBList<Agent>SpawnReinforcementAllyTroopsDelegate(StealthAreaMissionLogic.StealthAreaData triggeredStealthAreaData, StealthAreaMarker stealthAreaMarker)` | nested type |
| `StealthAreaData` | `public class StealthAreaData` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
