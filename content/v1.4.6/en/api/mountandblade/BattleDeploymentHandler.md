---
title: "BattleDeploymentHandler"
description: "BattleDeploymentHandler: a public class in TaleWorlds.MountAndBlade, inheriting DeploymentHandler; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs."
---
# BattleDeploymentHandler

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Handlers`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs`

## Overview

BattleDeploymentHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs. It is a public class, implementing/inheriting DeploymentHandler; the inheritance chain is BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleDeploymentHandler is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Missions.Handlers) the module directory; inheritance chain BattleDeploymentHandler → DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BattleDeploymentHandler` | `public BattleDeploymentHandler(bool isPlayerAttacker) : base(isPlayerAttacker)` | constructor |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `AutoDeployTeamUsingDeploymentPlan` | `public override void AutoDeployTeamUsingDeploymentPlan(Team team)` | method |
| `ForceUpdateAllUnits` | `public override void ForceUpdateAllUnits()` | method |
| `SetDefaultFormationOrders` | `public void SetDefaultFormationOrders(OrderController orderController)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DeploymentHandler](../DeploymentHandler)
- [same namespace SiegeDeploymentHandler](../SiegeDeploymentHandler)
