---
title: "AssignPlayerRoleInTeamMissionController"
description: "AssignPlayerRoleInTeamMissionController: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 13 exposed members (6 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AssignPlayerRoleInTeamMissionController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AssignPlayerRoleInTeamMissionController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AssignPlayerRoleInTeamMissionController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is AssignPlayerRoleInTeamMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 13 public/protected members: 6 methods, 4 properties, 2 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AssignPlayerRoleInTeamMissionController lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AssignPlayerRoleInTeamMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 6/13, properties 4/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AssignPlayerRoleInTeamMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnPlayerTurnToChooseFormationToLead;` | `public event PlayerTurnToChooseFormationToLeadEvent OnPlayerTurnToChooseFormationToLead;` | event |
| `OnAllFormationsAssignedSergeants;` | `public event AllFormationsAssignedSergeantsEvent OnAllFormationsAssignedSergeants;` | event |
| `IsPlayerInArmy` | `public bool IsPlayerInArmy` | property |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | property |
| `IsPlayerSergeant` | `public bool IsPlayerSergeant` | property |
| `PlayerChosenIndex` | `public int PlayerChosenIndex` | property |
| `AssignPlayerRoleInTeamMissionController` | `public AssignPlayerRoleInTeamMissionController(bool isPlayerGeneral, bool isPlayerSergeant, bool isPlayerInArmy, List<string>charactersInPlayerSideByPriority = null)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnTeamDeployed` | `public override void OnTeamDeployed(Team team)` | method |
| `OnPlayerTeamDeployed` | `public virtual void OnPlayerTeamDeployed()` | method |
| `OnPlayerChoiceMade` | `public virtual void OnPlayerChoiceMade(int chosenIndex)` | method |
| `OnPlayerChoiceFinalized` | `public void OnPlayerChoiceFinalized()` | method |
| `AssignSergeant` | `protected virtual void AssignSergeant(Formation formationToLead, Agent sergeant)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
