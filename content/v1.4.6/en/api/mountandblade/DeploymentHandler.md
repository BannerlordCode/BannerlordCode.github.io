---
title: "DeploymentHandler"
description: "DeploymentHandler: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 14 exposed members (10 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DeploymentHandler.cs."
---
# DeploymentHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## Overview

DeploymentHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DeploymentHandler.cs. It is a public class (abstract), implementing/inheriting MissionLogic; the inheritance chain is DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 14 public/protected members: 10 methods, 1 properties, 2 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeploymentHandler is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DeploymentHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 10/14, properties 1/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DeploymentHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPlayerSideDeploymentReady;` | `public event Action OnPlayerSideDeploymentReady;` | event |
| `OnEnemySideDeploymentReady;` | `public event Action OnEnemySideDeploymentReady;` | event |
| `PlayerTeam` | `public Team PlayerTeam` | property |
| `DeploymentHandler` | `public DeploymentHandler(bool isPlayerAttacker)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnBattleSideDeployed` | `public override void OnBattleSideDeployed(BattleSideEnum side)` | method |
| `AutoDeployTeamUsingDeploymentPlan` | `public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam);` | method |
| `ForceUpdateAllUnits` | `public abstract void ForceUpdateAllUnits();` | method |
| `FinishDeployment` | `public virtual void FinishDeployment()` | method |
| `InitializeDeploymentPoints` | `public void InitializeDeploymentPoints()` | method |
| `OrderController_OnOrderIssued_Aux` | `public static void OrderController_OnOrderIssued_Aux(OrderType orderType, MBReadOnlyList<Formation>appliedFormations, OrderController orderController = null, params object[]delegateParams)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
