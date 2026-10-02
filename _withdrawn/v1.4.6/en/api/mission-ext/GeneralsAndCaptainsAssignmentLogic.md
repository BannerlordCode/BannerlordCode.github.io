---
title: "GeneralsAndCaptainsAssignmentLogic"
description: "GeneralsAndCaptainsAssignmentLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 7 exposed members (5 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GeneralsAndCaptainsAssignmentLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class GeneralsAndCaptainsAssignmentLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GeneralsAndCaptainsAssignmentLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is GeneralsAndCaptainsAssignmentLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 7 public/protected members: 5 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GeneralsAndCaptainsAssignmentLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain GeneralsAndCaptainsAssignmentLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GeneralsAndCaptainsAssignmentLogic` | `public GeneralsAndCaptainsAssignmentLogic(TextObject attackerGeneralName, TextObject defenderGeneralName, TextObject attackerAllyGeneralName = null, TextObject defenderAllyGeneralName = null, bool createBodyguard = true)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnTeamDeployed` | `public override void OnTeamDeployed(Team team)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `SortCaptainsByPriority` | `protected virtual void SortCaptainsByPriority(Team team, ref List<Agent>captains)` | method |
| `PickBestRegularFormationToLead` | `protected virtual Formation PickBestRegularFormationToLead(Agent agent, List<Formation>candidateFormations)` | method |
| `MinimumAgentCountToLeadGeneralFormation` | `public int MinimumAgentCountToLeadGeneralFormation` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
