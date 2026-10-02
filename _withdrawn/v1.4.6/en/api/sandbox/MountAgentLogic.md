---
title: "MountAgentLogic"
description: "MountAgentLogic: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/MountAgentLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MountAgentLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MountAgentLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MountAgentLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MountAgentLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/MountAgentLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MountAgentLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MountAgentLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain MountAgentLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/MountAgentLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
