---
title: "SiegeDeploymentMissionController"
description: "SiegeDeploymentMissionController: a public class in TaleWorlds.MountAndBlade, inheriting DeploymentMissionController; 8 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeDeploymentMissionController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeDeploymentMissionController : DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeDeploymentMissionController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs. It is a public class, implementing/inheriting DeploymentMissionController; the inheritance chain is SiegeDeploymentMissionController → DeploymentMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 7 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeDeploymentMissionController lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SiegeDeploymentMissionController → DeploymentMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 7/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SiegeDeploymentMissionController` | `public SiegeDeploymentMissionController(bool isPlayerAttacker) : base(isPlayerAttacker)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `List` | `public List<ItemObject>GetSiegeMissiles()` | method |
| `OnAfterStart` | `protected override void OnAfterStart()` | method |
| `OnSetupTeamsOfSide` | `protected override void OnSetupTeamsOfSide(BattleSideEnum battleSide)` | method |
| `OnSetupTeamsFinished` | `protected override void OnSetupTeamsFinished()` | method |
| `BeforeDeploymentFinished` | `protected override void BeforeDeploymentFinished()` | method |
| `AfterDeploymentFinished` | `protected override void AfterDeploymentFinished()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DeploymentMissionController](../DeploymentMissionController/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
