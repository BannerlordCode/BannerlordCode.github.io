---
title: "SearchBodyMissionHandler"
description: "SearchBodyMissionHandler: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SearchBodyMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class SearchBodyMissionHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SearchBodyMissionHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is SearchBodyMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SearchBodyMissionHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain SearchBodyMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
