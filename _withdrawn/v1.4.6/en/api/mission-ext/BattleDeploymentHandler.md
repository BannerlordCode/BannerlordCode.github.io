---
title: "BattleDeploymentHandler"
description: "BattleDeploymentHandler: a public class in TaleWorlds.MountAndBlade.Missions.Handlers, inheriting DeploymentHandler; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleDeploymentHandler

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Handlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleDeploymentHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs. It is a public class, implementing/inheriting DeploymentHandler; the inheritance chain is BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleDeploymentHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Missions.Handlers`, inheritance chain BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BattleDeploymentHandler` | `public BattleDeploymentHandler(bool isPlayerAttacker) : base(isPlayerAttacker)` | constructor |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `AutoDeployTeamUsingDeploymentPlan` | `public override void AutoDeployTeamUsingDeploymentPlan(Team team)` | method |
| `ForceUpdateAllUnits` | `public override void ForceUpdateAllUnits()` | method |
| `SetDefaultFormationOrders` | `public void SetDefaultFormationOrders(OrderController orderController)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DeploymentHandler](../DeploymentHandler/)
- [same namespace SiegeDeploymentHandler](../SiegeDeploymentHandler/)
