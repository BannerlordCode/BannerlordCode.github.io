---
title: "CampaignSiegeStateHandler"
description: "CampaignSiegeStateHandler: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 8 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignSiegeStateHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CampaignSiegeStateHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CampaignSiegeStateHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CampaignSiegeStateHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignSiegeStateHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain CampaignSiegeStateHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/CampaignSiegeStateHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsSiege` | `public bool IsSiege` | property |
| `IsSallyOut` | `public bool IsSallyOut` | property |
| `Settlement` | `public Settlement Settlement` | property |
| `CampaignSiegeStateHandler` | `public CampaignSiegeStateHandler()` | constructor |
| `OnRetreatMission` | `public override void OnRetreatMission()` | method |
| `OnMissionResultReady` | `public override void OnMissionResultReady(MissionResult missionResult)` | method |
| `OnSurrenderMission` | `public override void OnSurrenderMission()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CombatMissionWithDialogueController](../CombatMissionWithDialogueController/)
